module.exports = {
  get_inventory: (req, res) => {
    const db = req.app.get('db')
    db.get_Inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "AHHHHHHHH! NOOOO" })
        console.log(err)
      })
  },

  create: (req, res) => {
    const db = req.app.get('db');
    const { name, price, image } = req.body;
    db.create_product([name, price, image])
      .then(() => {
        res.status(200).send([name, price, image])
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "AHHHHHHHHH! Whaa! No!" })
        console.log(err)
      })
  },

  update: (req, res) => {
    const db = req.app.get('db');
    const deleteId = parseInt(req.params.id);
    db.update_product(deleteId)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "WHATTTTT AHHH! FREAKKKK" })
        console.log(err)
      })
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    const deleteID = parseInt(req.params.id)
    console.log(deleteID)
    db.delete_product(deleteID).then(() => res.sendStatus(200)).catch(err => {
      res.status(500).send({ errorMessage: "OH HECK NO!! " })
      console.log(err)
    })
  }


}

