export default async function handler(req, res) {
    const EC2_URL = "http://16.16.63.36";

    try {
        const response = await fetch(`${EC2_URL}/detect`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Backend connection failed" });
    }
}
