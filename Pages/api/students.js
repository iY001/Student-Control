import getStudents from "@/Services/Students/getStudents";


export default async function handler(req, res) {
    res.status(200).json(await getStudents())
}