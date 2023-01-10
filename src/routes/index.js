const { Router } = require('express');
const { backup } = require('../../models');

const router = Router();

router.post('/backup', async (req, res) => {
  try {
    const body = req.body;
    const kodePeserta = body.kodePeserta;

    let data = await backup.findOne({
      where: { kodePeserta },
    });

    if (data === null) {
      data = await backup.create(body);
    } else {
      await backup.update(body, { where: { kodePeserta } });
    }

    res.send({
      status: 'success',
      [body.kodeTes]: data,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).send({
      status: 'failed',
      message: error?.message || 'Something went wrong',
    });
  }
});

module.exports = router;
