import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { serverError, notFound } from "../../../../core/presentation/helpers/helpers";
import { UserRepository } from "../../infra/repositories/user.repository"

import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";

export class GetAllUsersController implements Controller{
	async handle(req: Request, res: Response): Promise<any> {
		try {

			const repository = new UserRepository();
			const allUsers = await repository.getAllUsers()

			//if (!allUsers.length) return notFound(res);
			if (!allUsers) return res.status(404).send("Nenhum usuário.");

			//EJS
			//return res.status(200).render('users', {data:allUsers});
			return res.status(200).send(allUsers);

	} catch (err:any) {
			return serverError(res, err);
		}
	}
}
