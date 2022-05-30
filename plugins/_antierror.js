let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 999999999999999999) {
        user.money = 999999999999999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.health * 1) > 100000) {
        user.health = 100000
    } else if ((user.health * 1) < 0) {
        user.health = 0
    }
    if ((user.exp * 1) > 999999999999999999999999999) {
         user.exp = 999999999999999999999999999
    } else if ((user.exp * 1) < 0) {
         user.exp = 0
    }
    if ((user.limit * 1) > 999999999999999999) {
         user.limit = 999999999999999999
    } else if ((user.limit * 1) < 0) {
         user.limit = 0
    }
    if ((user.bank * 1) > 999999999999999999) {
         user.bank = 999999999999999999
    } else if ((user.bank * 1) < 0) {
         user.bank = 0
    }
    if ((user.cupon * 1) > 1000) {
        user.cupon = 1000
    } else if ((user.cupon * 1) < 0) {
        user.cupon = 0
    }
    if ((user.botol * 1) > 1000000) {
        user.botol = 1000000
    } else if ((user.botol * 1) < 0) {
        user.botol = 0
    }
    if ((user.kardus * 1) > 1000000) {
        user.kardus = 1000000
    } else if ((user.kardus * 1) < 0) {
        user.kardus = 0
    }
    if ((user.kaleng * 1) > 1000000) {
        user.kalenf = 1000000
    } else if ((user.kaleng * 1) < 0) {
        user.kaleng = 0
    }
    if ((user.paus * 1) > 1000000) {
        user.paus = 1000000
    } else if ((user.paus * 1) < 0) {
        user.paus = 0
    }
    if ((user.kepiting * 1) > 1000000) {
        user.kepiting = 1000000
    } else if ((user.kepiting * 1) < 0) {
        user.kepiting = 0
    }
    if ((user.cumi * 1) > 1000000) {
        user.cumi = 1000000
    } else if ((user.cumi * 1) < 0) {
        user.cumi = 0
    }
    if ((user.gurita * 1) > 1000000) {
        user.gurita = 1000000
    } else if ((user.gurita * 1) < 0) {
        user.gurita = 0
    }
    if ((user.buntal * 1) > 1000000) {
        user.buntal = 1000000
    } else if ((user.buntal * 1) < 0) {
        user.buntal = 0
    }
    if ((user.dory * 1) > 1000000) {
        user.dory = 1000000
    } else if ((user.dory * 1) < 0) {
        user.dory = 0
    }
    if ((user.lobster * 1) > 1000000) {
        user.lobster = 1000000
    } else if ((user.lobster * 1) < 0) {
        user.lobster = 0
    }
    if ((user.hiu * 1) > 1000000) {
        user.hiu = 1000000
    } else if ((user.hiu * 1) < 0) {
        user.hiu = 0
    }
    if ((user.lumba * 1) > 1000000) {
        user.lumba = 1000000
    } else if ((user.lumba * 1) < 0) {
        user.lumba = 0
    }
    if ((user.ikan * 1) > 1000000) {
        user.ikan = 1000000
    } else if ((user.ikan * 1) < 0) {
        user.ikan = 0
    }
    if ((user.udang * 1) > 1000000) {
        user.udang = 1000000
    } else if ((user.udang * 1) < 0) {
        user.udang = 0
    }
    if ((user.orca * 1) > 1000000) {
        user.orca = 1000000
    } else if ((user.orca * 1) < 0) {
        user.orca = 0
    }
    if ((user.apel * 1) > 1000000) {
        user.apel = 1000000
    } else if ((user.apel * 1) < 0) {
        user.apel = 0
    }
    if ((user.pisang * 1) > 1000000) {
        user.pisang = 1000000
    } else if ((user.pisang * 1) < 0) {
        user.pisang = 0
    }
    if ((user.mangga * 1) > 1000000) {
        user.mangga = 1000000
    } else if ((user.mangga * 1) < 0) {
        user.mangga = 0
    }
    if ((user.jeruk * 1) > 1000000) {
        user.jeruk = 1000000
    } else if ((user.jeruk * 1) < 0) {
        user.jeruk = 0
    }
    if ((user.anggur * 1) > 1000000) {
        user.anggur = 1000000
    } else if ((user.anggur * 1) < 0) {
        user.anggur = 0
    }
    if ((user.apel * 1) > 1000000) {
        user.apel = 1000000
    } else if ((user.apel * 1) < 0) {
        user.apel = 0
    }
    if ((user.apel * 1) > 1000000) {
        user.apel = 1000000
    } else if ((user.apel * 1) < 0) {
        user.apel = 0
    }
    if ((user.apel * 1) > 1000000) {
        user.apel = 1000000
    } else if ((user.apel * 1) < 0) {
        user.apel = 0
    }
    if ((user.kayu * 1) > 1000000) {
        user.kayu = 1000000
    } else if ((user.kayu * 1) < 0) {
        user.kayu = 0
    }
    if ((user.batu * 1) > 1000000) {
        user.batu = 1000000
    } else if ((user.batu * 1) < 0) {
        user.batu = 0
    }
    if ((user.legendary * 1) > 100000) {
        user.legendary = 100000
    } else if ((user.legendary * 1) < 0) {
        user.legendary = 0
    }
    if ((user.mythic * 1) > 100000) {
        user.mythic = 100000
    } else if ((user.mythic * 1) < 0) {
        user.mythic = 0
    }
    if ((user.uncommon * 1) > 100000) {
        user.uncommon = 100000
    } else if ((user.uncommon * 1) < 0) {
        user.uncommon = 0
    }
    if ((user.common * 1) > 100000) {
        user.common = 100000
    } else if ((user.common * 1) < 0) {
        user.common = 0
    }
    if ((user.pancingan * 1) > 5) {
        user.pancingan = 5
    } else if ((user.pancingan * 1) < 0) {
        user.pancingan = 0
    }
    if ((user.sword * 1) > 100) {
        user.sword = 100
    } else if ((user.sword * 1) < 0) {
        user.sword = 0
    }
    if ((user.potion * 1) > 10000) {
        user.potion = 10000
    } else if ((user.potion * 1) < 0) {
        user.potion = 0
    }
    if ((user.berlian * 1) > 10000) {
        user.berlian = 10000
    } else if ((user.berlian * 1) < 0) {
        user.berlian = 0
    }
    if ((user.emas * 1) > 10000) {
        user.emas = 10000
    } else if ((user.emas * 1) < 0) {
        user.emas = 0
    }
    if ((user.diamond * 1) > 10000) {
        user.diamond = 10000
    } else if ((user.diamond * 1) < 0) {
        user.diamond = 0
    }
}

module.exports = handler
