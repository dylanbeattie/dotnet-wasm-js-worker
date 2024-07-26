function handleMessageFromWorker(message) {
    console.log("message from worker:");
	console.log(message.data);
}

const worker = new Worker("worker.js", { type: 'module' });
worker.addEventListener("message", handleMessageFromWorker);

document.body.addEventListener("click", function() {
	console.log("click");
	worker.postMessage({ foo: "bar" });
});

console.log("brrr");