const router = require('express').Router();         //accedemos a las rutas definidas para el servidor
const Contratos = require('../modelos/Contratos');    //utilizamos el esquema de Animales

router.get('/', (req,res) =>{           //ruta GET inicial
    res.redirect('todos');               //redireccionado a la vista inicio.hbs
});

router.get('/todos', async (req,res) =>{                //ruta GET para todos los animales                             
    const contratos = await Contratos.find().lean();      //busca en la BD todos los animales  
    res.render('todos', {contratos});                    //redireccionado a la vista todos.hbs
});

router.get('/primer', async (req,res) =>{               //ruta GET para encontrar un solo animal            
    const contratos = await Contratos.findOne().lean();     //busca en la BD todos los animales 
    res.render('primer', {contratos});                     //redireccionado a la vista inicio.hbs
});

router.get('/todos/ordenadoA', async (req,res) =>{      //ruta GET para todos los animales ordenados                            
    const contratos = await Contratos.find().sort({Nombre:1}).lean();      //ordena ascendentemente los animales  
    res.render('todos', {contratos});                    //redireccionado a la vista todos.hbs
});

router.get('/todos/ordenadoB', async (req,res) =>{      //ruta GET para todos los animales ordenados                            
    const contratos = await Contratos.find().sort({Nombre:-1}).lean();      //ordena descendentemente los animales  
    res.render('todos', {contratos});                    //redireccionado a la vista todos.hbs
});

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const Codelco = new Contratos(body)
        await Codelco.save()
        res.redirect('/crear')
    } catch (error) {
        console.log('error', error)
    }
})

router.get("/delete", (req,res)=>{
    console.log(req.params.Nombre);
    Contratos.deleteOne({ Nombre: req.params.Nombre }, function(err,data) {
        if (!err) {
            console.log(data);

                console.log("empleado eliminado correctamente")
        }
        else {
                console.log("error")
        }
    });
    res.redirect("/");
});

router.put('/editar/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    console.log('nombre')
    console.log('body', body)

    try {
        const contratos = await contratos.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje: 'Empleado Modificado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'fallo'
        })
    }
})


module.exports = router;           //exporta las rutas para ser utilizada por otras páginas