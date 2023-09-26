const Model=require("../models/demo.txt");


exports.Create=async(req,res)=>{
    const data=req.body;
    try{
        const admin=await Model.create(data);
        return res.status(201).json({status:"success",data:data});
    } catch (err) {
      return res.status(500).json({status:"fail",data:err});
    }
  };


  exports.Read=async(req,res)=>{
    try {
       
        let Query = {};
        let Projection = "Content";
    
        const data = await Model.find(Query, Projection).lean().exec();
        res.status(200).json({ status: "success", data: data });
      } catch (err) {
        res.status(400).json({ status: "fail", data: err });
      }
  }


  exports.Update = async (req, res) => {
    try {
      const id = req.params.id;
      const query = { _id: id };
      const reqBody = req.body;
  
      const updateResult = await  Model.updateOne(query, reqBody);
  
      res.status(200).json({ status: "success", data: updateResult });
    } catch (err) {
      res.status(400).json({ status: "fail", data: err });
    }
  };

  exports.Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const result = await Model.deleteOne(query);
        res.status(200).json({ status: "success", data: result });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err.message });
    }
  };

