import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('shout').addEventListener("click", async (event) => {
        event.preventDefault();
        //alert('Hey i got you working ooo');
        await confetti();
    });

    document.getElementById('api').addEventListener("click", async (event) => {
        const res = await fetch('/api/server', {
            method: 'POST',
            body: JSON.stringify({
                song: 'Ji ki de',
                artist: 'Lipopo',
                genre: 'Gospel'
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.text()
        document.getElementById('message').innerHTML = data
    })
})