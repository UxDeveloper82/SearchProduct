baseUrl = "http://icreatesites4u.com/api/portfolio";

const loadPorts = async () => {
    try {
        const res = await fetch(baseUrl, { mode: 'no-cors'});
        const ports = await res.json();
        if (!res.ok) throw new Error(`${ports.message} (${res.status})`);
        console.log(ports);
    } catch(err) {
        console.log(err);
    }
};

loadPorts();