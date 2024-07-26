using System;
using System.Runtime.InteropServices.JavaScript;
using System.Threading.Tasks;

Console.WriteLine("WASM Demo is running!");

public partial class WasmTaskRunner {

	[JSExport]
	public static async Task<string> RunAsync(int delayInMillseconds) {
		await Task.Delay(delayInMillseconds);
		return $"Done in {delayInMillseconds} ms. It's now {DateTime.Now}";
	}
}