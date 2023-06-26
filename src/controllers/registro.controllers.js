import {pool} from '../db.js'

export const getUsers = async (req,res) => {
    try {
        const [rows]= await pool.query('SELECT * FROM registro')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "someting goes wrong"
        })
    }
}

export const getUser = async (req,res) => {
    try {
        const [rows]= await pool.query('SELECT * FROM registro WHERE id=?',[req.params.id])
        if (rows.length<=0) return  res.status(404).json({
            message: 'Usuario no registrado'
        })
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "someting goes wrong"
        })
    }
}

export const postUser = async (req,res)=>{
    const  {username, nam, ln, phone, email, pass}= req.body
    try {
        const [rows]= await  pool.query('INSERT INTO registro(username, nam, ln, phone, email, pass) VALUES(?,?,?,?,?,?)',[username, nam, ln, phone, email, pass])
         res.send({
            id: rows.insertId,
            username,
            nam,
            ln,
            phone,
            email,
            pass
        })
        } catch (error) {
        return res.status(500).json({
            message: "someting goes wrong"
         })
    }
}

export const patchUser = async (req,res) => {
    const {id}= req.params
    const {username, nam, ln, phone, email, pass}= req.body
    try {  
        const [result]= await pool.query('UPDATE registro SET username = IFNULL(?, username), nam = IFNULL(?, nam), ln = IFNULL(?, ln), phone = IFNULL(?, phone), email = IFNULL(?, email), pass = IFNULL(?, pass) WHERE id =?',[username, nam, ln, phone, email, pass, id])
    
        console.log(result)

        if(result.affectedRows===0) return res.status(404).json({
        message: "Usuario no registrado"
        })
    
        const [rows] = await pool.query('SELECT * FROM registro WHERE id = ?', [id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "someting goes wrong"
        })
    }
}

export const deleteUser = async (req,res) => {
    try {
        const result = await pool.query('DELETE FROM registro WHERE id=?', [req.params.id])
        console.log(result)
        res.send('usuario eliminado')
    } catch (error) {
        return res.status(500).json({
            message: "someting goes wrong"
        })
    }
}