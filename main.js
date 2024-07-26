document.getElementById("button50").addEventListener("click", function() { callWorker(50) });
document.getElementById("button100").addEventListener("click", function() { callWorker(100) });
document.getElementById("button150").addEventListener("click", function() { callWorker(150) });
document.getElementById("button200").addEventListener("click", function() { callWorker(200) });
document.getElementById("button500").addEventListener("click", function() { callWorker(500) });
document.getElementById("button2500").addEventListener("click", function() { callWorker(2500) });

function callWorker(delay) {
	worker.postMessage({ delay: delay });
}

var output = document.getElementById('output');
function handleMessageFromWorker(message) {
    console.log("message from worker:");
	console.log(message.data);
	output.innerHTML += `<p>${message.data.result}</p>`;
}
const worker = new Worker("worker.js", { type: 'module' });
worker.addEventListener("message", handleMessageFromWorker);