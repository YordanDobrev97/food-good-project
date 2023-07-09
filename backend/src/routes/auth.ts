import { Router, Request, Response } from 'express'
import User from '../models/user'

const router = Router()

router.get('/create', (req: Request, res: Response) => {
    const user = new User({
        username: 'Test',
        password: 'dsadsasadsa',
        profileImage: 'no'
    })
    user.save()
    res.json('user created')
})

export default router