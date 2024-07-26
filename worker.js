import { dotnet } from '/bin/Debug/net8.0-browser/wwwroot/_framework/dotnet.js'

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    // .withApplicationArgumentsFromQuery()
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);
await dotnet.run();

function RunWasm(delay) {
	return exports.WasmTaskRunner.RunAsync(delay);
}

self.addEventListener('message', async function (message) {
	console.log('Worker: Message received from main script');
	var result = RunWasm(100);
	console.log(message.data);
	this.postMessage({ message: "done", result: result });
  });