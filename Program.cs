using System;
using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

Console.WriteLine("WASM Demo is running!");

public partial class WasmTaskRunner
{

	[JSExport]
	public static Task RunAsync(int delayInMillseconds) => Task.Delay(delayInMillseconds);
	// Task.Run(async delegate {
	// 	Task.Delay(delayInMillseconds);
	// 	return $"Done in {delayInMillseconds} ms. It's now {DateTime.Now}";
	// });

}