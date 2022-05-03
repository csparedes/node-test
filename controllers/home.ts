import {Request, Response} from "express";

import Home from '../models/home';

export const getHomes = async (req: Request,res:Response) =>{    
    const homes = await Home.find({});
    res.json({
        homes,
        msg: "Ok"
    });
}
export const getHome = async (req: Request,res:Response) =>{    
    const {id} = req.params;
    const home = await Home.findById(id);
    res.json({
        home,
        msg: "Ok"
    });
}

export const postHome = async (req:Request, res:Response)=>{
    const {body} = req;
    const home = new Home(body);
    await home.save();

    res.json({
        home,
        msg: "Ok"
    });
}

export const putHome = async (req:Request, res:Response)=>{
    const {id}=req.params;
    const {body} = req;

    const home = await Home.findByIdAndUpdate(id,body, {
        new:true
    });
    res.json({
        home,
        msg: "Ok"
    });

}
export const deleteHome = async (req:Request, res:Response)=>{
    const {id}=req.params;
    const home = await Home.findByIdAndUpdate(id,{isActive: false}, {
        new:true
    });
    res.json({
        home,
        msg: "Ok"
    });

}
