import { dotnet } from '/bin/Debug/net8.0-browser/wwwroot/_framework/dotnet.js'

const { setModuleImports, getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    // .withApplicationArgumentsFromQuery()
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);
// await dotnet.run();

// async function RunWasm(delay) {
// 	return
// }

self.addEventListener('message', async function (message) {
	console.log('Worker: Message received from main script');
	console.log(message.data);
	await exports.WasmTaskRunner.RunAsync(500);
	console.log("finished awaiting .NET thing");
	this.postMessage({ message: "done" });
  });