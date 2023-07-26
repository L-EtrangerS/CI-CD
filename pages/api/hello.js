export default function handler(req, res) {
    console.log(1);
    res.status(200).json({ text: 'Hello' });
}