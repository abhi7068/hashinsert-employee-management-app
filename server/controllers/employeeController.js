const Employee = require('../models/employee');

const saveEmployee = async(req,res)=>{
    const newEmployee = Employee({
        employee_id: req.body.employee_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        hire_date: req.body.hire_date,
        salary: req.body.salary,
        department_id: req.body.department_id
      });
      try {
            const savedEmployee=await newEmployee.save();
            return res.status(200).send({success:true,Employee:savedEmployee});
        } catch (error) {
            return res.status(400).send({success:false,msg:error});
        }
}

const getOneEmployee = async(req,res)=>{
    const filter = {_id :req.params.id};
    const data = await Employee.findOne(filter);
    if(data){
        // return res.json(data);
        return res.status(200).send({success:true,Employee:data});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
}

const getAll = async(req,res)=>{
    const data=await Employee.find();
    if(data){
        // return res.json(data);
        return res.status(200).send({success:true,Employee:data});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
}

const deleteEmployee = async(req,res)=>{
    const filter = {_id :req.params.id};
    const result=await Employee.deleteOne(filter);
    if(result){
        // return res.json(data);
        return res.status(200).send({success:true,msg:"data deleted successfully",data:result});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
}

const updateEmployee =async(req,res)=>{
    const filter = {_id:req.params.id};
    const options ={
      upsert : true,
      new : true
    };
    try {
        const result=await Employee.findOneAndUpdate(filter,{
            employee_id: req.body.employee_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            hire_date: req.body.hire_date,
            salary: req.body.salary,
            department_id: req.body.department_id
        },options);
        return res.status(200).send({success:true,data:result});
    } catch (error) {
        return res.status(400).send({success:false,msg:error});
    }
}

module.exports={saveEmployee,getOneEmployee,getAll,deleteEmployee,updateEmployee};