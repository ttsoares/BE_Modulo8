import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { serverError, notFound } from "../../../../core/presentation/helpers/helpers";
import { UserRepository } from "../../infra/repositories/user.repository"

export class GetAllUsersController implements Controller{
	async handle(req: Request, res: Response): Promise<any> {
		try {

			const repository = new UserRepository();
			const allUsers = await repository.getAllUsers()

			if (!allUsers) return res.status(200).send([]);

			return res.status(200).send(allUsers);

	} catch (err:any) {
			return serverError(res, err);
		}
	}
}
