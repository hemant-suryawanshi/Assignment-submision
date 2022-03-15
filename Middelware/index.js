const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority",
    console.log("connected")
  );
};


const Sectionschema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
    rack_no: { type: String, required: true },
  }
);
const Section = mongoose.model("section", Sectionschema);


const authurSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // drawer_no: { type: String, required: true },
    // sectionId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "section",
    //   required: true,
    // },
    bookid:[{  type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: false,}]
  },
);
const Author = mongoose.model("author", authurSchema); 


const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // type: { type: String, required: true },

    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
  },
);
const Book = mongoose.model("book", bookSchema);


// section ------------------------------------------------------------------

app.get("/section", async (req, res) => {
  try {
    const sections = await Section.find().lean().exec();
    return res.status(200).send({ sections: sections });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/section", async (req, res) => {
  try {
    const sections = await Section.create(req.body);
    return res.status(201).send(sections);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/section/:id", async (req, res) => {
  try {
    const sections = await Section.findById(req.params.id).lean().exec();
 

    return res.status(200).send(sections);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/section/:id", async (req, res) => {
  try {
    const sections = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(sections);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/section/:id", async (req, res) => {
  try {
    const sections = await Section.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//Author ----------------------------------------------------------------------------------


app.get("/author", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();
    return res.status(200).send({ authors: authors });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/author", async (req, res) => {
  try {
    const authors = await Author.create(req.body);
    return res.status(201).send(authors);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/author/:id", async (req, res) => {
  try {
    const authors = await Author.findById(req.params.id).lean().exec();
 

    return res.status(200).send(authors);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/author/:id", async (req, res) => {
  try {
    const authors = await Author.findById(req.params.id).lean().exec();
    authors.bookid.push(req.body.bookid)
    const auth= await Author.findByIdAndUpdate(req.params.id, authors, {
      new: true,
    }).lean().exec()
    // console.log(authors.bookid,req.body.bookid) 
    return res.status(200).send(auth);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/author/:id", async (req, res) => {
  try {
    const authors = await Author.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(authors);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
// -Books----------------------------------------------------------------------------------------------------

app.get("/book", async (req, res) => {
  try {
    const books = await Book.find()
    .populate({path:"authorId",select:["name","bookid"]})
    .populate({path:"sectionId",select:["section_name","rack_no"]})
    .lean().exec();
    return res.status(200).send({ books: books });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/book", async (req, res) => {
  try {
    const books = await Book.create(req.body);
    return res.status(201).send(books);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const books = await Book.findById(req.params.id).lean().exec();
 

    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/book/:id", async (req, res) => {
  try {
    const books = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/book/:id", async (req, res) => {
  try {
    const books = await Book.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



app.listen(4000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("listening on port 5000");
});