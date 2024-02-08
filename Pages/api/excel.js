import readExcel from '@/Services/excel/read';
import multer from 'multer';

const upload = multer().single('file');


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method == "POST") {
    await Post(req, res);
    res.send("Request Recevid")
  }
}

async function Post(req, res) {
  try {
    
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'Multer Error' });
      } else if (err) {
        return res.status(500).json({ error: 'Error receiving file' });
      }

      const uploadedFile = req.file;
      await readExcel(uploadedFile);
      
      res.status(200).json({ success: true });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
