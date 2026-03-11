import { authService } from "../services/auth.service";
import type { Request, Response } from "express";


export class AuthController{
 private service = new authService(); 
  constructor(){
 this.service = new authService;

 this.register = this.register.bind(this);
 this.login = this.login.bind(this);
  }

  async register(req: Request, res: Response){
    try{
    const { name, email, password } = req.body;
    const newUser = await this.service.register(email, password);
    return res.status(201).json(newUser);

    }catch(error: unknown){
      const message = error instanceof Error ? error.message: "An unknown error occured";
      return res.status(401).json({message});
    }
  }
    
    async login (req: Request, res: Response){
     try{
      const {email, password} = req.body;
      if(!email || !password){
        throw new Error("Email and Password are required");
      }
      const token = await this.service.login(email, password);
      return res.status(200).json({token});

     }catch(error: unknown){
      const message = error instanceof Error ? error.message: "An unknown error occured";
      return res.status(500).json({message});
     }
    }
  
  
}