import { dotnet } from '/bin/Debug/net8.0-browser/wwwroot/_framework/dotnet.js'

const { getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

 async function RunWasm(delay) {
	return await exports.WasmTaskRunner.RunAsync(delay);
 }

self.addEventListener('message', async function (message) {
	console.log('Worker: Message received from main script');
	console.log(message.data);
	var delay = message.data.delay ?? 50;
	var result = await RunWasm(delay);
	console.log("finished awaiting .NET thing");
	console.log(result);
	this.postMessage({ message: "done", result: result });
  });