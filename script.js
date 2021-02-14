const Benchmark = require("benchmark");
const path = require("path");
const fs = require("fs");
const assert = require("assert");

// imported in webpack.js
const Compiler = require("./lib/Compiler");
const { getNormalizedWebpackOptions } = require("./lib/config/normalization");
const { applyWebpackOptionsDefaults } = require("./lib/config/defaults");
const WebpackOptionsApply = require("./lib/WebpackOptionsApply");
const NodeEnvironmentPlugin = require("./lib/node/NodeEnvironmentPlugin");
const NormalModuleFactory = require("./lib/NormalModuleFactory");
const ContextModuleFactory = require("./lib/ContextModuleFactory");
const Compilation = require("./lib/Compilation");

const distPath = path.join(__dirname, "dist");

const main = async deferred => {
	fs.rmdirSync(distPath, { recursive: true });
	const config = {
		mode: "development",
		output: {
			libraryTarget: "commonjs2",
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js"
		},
		entry: {
			test: "./src/index.js"
		},
		node: {
			util: "empty"
		}
	};

	const options = getNormalizedWebpackOptions(config); // option の normalization
	if (options["context"] === undefined) options.context = process.cwd();
	const compiler = create(options);
	registerHooks(compiler);

	// Compiler#run
	const onCompiled = (err, compilation) => {
		process.nextTick(() => {
			compiler.emitAssets(compilation, err => {
				check();
				if (deferred) deferred.resolve();
			});
		});
	};

	// Compiler#compile

	const callback = err => console.error(err);
	const normalModuleFactory = new NormalModuleFactory({
		context: options.context,
		fs: null,
		resolverFactory: compiler.resolverFactory,
		options: options.module,
		associatedObjectForCache: compiler.root,
		layers: options.experiments.layers
	});
	const contextModuleFactory = new ContextModuleFactory(
		compiler.resolverFactory
	);
	compiler.hooks.contextModuleFactory.call(contextModuleFactory);
	const params = {
		normalModuleFactory,
		contextModuleFactory
	};

	const compilation = new Compilation(compiler);
	compilation.name = compiler.name;
	compilation.records = compiler.records;
	compiler.hooks.thisCompilation.call(compilation, params);
	// EntryPluginのdependencyFactoryをcompilation.dependencyFactoriesにsetするのに使っている
	compiler.hooks.compilation.call(compilation, params);

	// compiler.hooks.make で tapAsyncしている物の一つにEntryPluginがあり、そこが本丸
	compiler.hooks.make.callAsync(compilation, err => {
		// ここまできたらほぼ終わってる
		if (err) return callback(err);

		process.nextTick(() => {
			// compilation.finish((err) => {
			//   if (err) return callback(err);

			compilation.seal(err => {
				if (err) return callback(err);

				return onCompiled(null, compilation);
			});
			// });
		});
	});
};

const registerHooks = compiler => {
	compiler.hooks.run.tap("sample", () => {
		console.log(`Compilation ${compiler.name} starting...`);
	});
	compiler.hooks.done.tap("sample", () => {
		console.log(`Compilation ${compiler.name} finished`);
	});
};

const check = () => {
	const test = require(path.resolve(distPath, "test.js")).default;
	assert.equal(test(), "Lion is stronger than rabbit");
	console.log("Success");
};

const create = options => {
	const compiler = new Compiler(options.context);
	compiler.name = "testing compiler";
	compiler.options = options;

	new NodeEnvironmentPlugin({
		infrastructureLogging: options.infrastructureLogging
	}).apply(compiler);

	if (Array.isArray(options.plugins)) {
		for (const plugin of options.plugins) {
			if (typeof plugin === "function") {
				plugin.call(compiler, compiler);
			} else {
				plugin.apply(compiler);
			}
		}
	}
	applyWebpackOptionsDefaults(options);
	new WebpackOptionsApply().process(options, compiler); // ここでEntryPluginとかapplyしてる
	compiler.hooks.initialize.call();
	return compiler;
};

const benchmarkOptions = {
	defer: true,
	onCycle: function () {
		process.stderr.write(".");
	},
	minSamples: 10
};

const suite = new Benchmark.Suite();

suite.add(
	"using thread",
	deferred => {
		process.flag = true;
		main(deferred);
	},
	benchmarkOptions
);

suite.add(
	"not using thread",
	deferred => {
		process.flag = false;
		main(deferred);
	},
	benchmarkOptions
);

suite.on("cycle", event => {
	process.stderr.write("\n");
	const b = event.target;
	console.log(
		`${b.name}: ${Math.floor(
			1000 * (b.stats.mean - b.stats.moe)
		)} - ${Math.floor(1000 * (b.stats.mean - b.stats.moe))}`
	);
});

// suite.run({ async: true });

process.flag = false;
main();
