'Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('BEM VINDO A CPV FILHO DA PUTAAAAAAAAAAAA')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Fodase as boas vindas, vai tomar no cu ❌')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Boas vindas ativadas kkkkkk ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Fodase as boas vindas, vai tomar no cu ❌')
					} else {
						reply('*1- Pra ativar as boas vindas / 0- Pra desativar*')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marca alguem que vc quer q eu copie.')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Agora minha foto de perfil eh desse viado aqui kkkkkkk >>>>>>> @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('*ta sem foto de perfil caralho*')
					}
					break
				/*case 'off':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('caralho mamou gostoso entao kkkkkkkkkkkkkkkkkkkk')
					}
					break*/
case 'sarra':
					if (mentioned.length > 1) {
						teks = 'fuzil\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.fuzil(from, mentioned)
					} else {
						mentions(`*O @${mentioned[0].split('@')[0]} sarra nela com fuzil na bandoleira 🔥🚩🐊*`, mentioned, true)
						client.fuzil(from, mentioned)
					}
					break
			    	case 'mamei':
				    if (args.length < 1) return reply ('*CARALHO, MAMOU GOSTOSO *GLUB* *GLUB* *GLUB* KKKKKKKKKKKKK*')
		            		break
		       	    	case 'messidatrufa':
				    if (args.length < 1) return reply ('*Tru tru trut trufa da braba\n*com mousse bacana\n*vem compra da trufa que tu vai gosta a pampa\n*compra da minha trufa\n*morango, cereja\n*vem comprar da trufa que sabe a sobremesa...*\n\n*https://youtu.be/d90Fa0OQLW0\n*')
		            		break
		            	case 'teste':
				    if (args.length < 1) return reply ('*Teste de mensagem do Bot ✅*')
		            		break
		            	case 'puta':
				    if (args.length < 1) return reply ('puta fala do meu nome\nela nunca superou\ntira meu nome da boca\nhoje eu to superior\nela é uma cachorra\nvai sempre pra onde eu to\nnao tenho papo que faz curva\nfodase oq ja falo\n\n*https://youtu.be/jTkOas8greA - Like e se inscreve pra ajudar nosso YungGott 👺✌️*')
		            		break
		            	case 'clonacartao':
				    if (args.length < 1) return reply ('*✅ CARTÃO CLONADO COM SUCESSO ✅*\n*BANDEIRA*: MASTERCARD\n*NUMERO*: 554298602161309\n*BANCO:* BANCO BRADESCO, S.A.\n*CVV:* 452\n*NOME:* RAFAEL ALEPRANDI BERGAMIN\n')	
					break
				case 'matlastore':
				    if (args.length < 1) return reply ('*As melhores camisas de futebol, NBA e de todo mundo, você só encontra aqui!*\n*Instagram:*https://instagram.com/matlastoreoficial\n*WhatsApp:* https://wa.me/5521983617581\n*Membro CPV possui 10% off na primeira compra com cupom #MATLACPV*')
		            		break
		            	case 'kkk':
				    if (args.length < 1) return reply ('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
		            		break
		           	case 'perdi':
				    if (args.length < 1) return reply ('PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
		            		break
		           	case 'explodi':
				    if (args.length < 1) return reply ('EXPLODI KKKKKKKKKKKKKKKKKKKKKKKKKK')
		            		break
		           	case 'textaodopedroka':
				    if (args.length < 1) return reply ('*Textao do Pedroka:*\n*Assim como o betin eu vou sair do grupo e bloquear todos. Só pra deixar claro, nenhum filho de policial verme vai falar mal do meu pai e sair impune, agora o bagulho vai ser diferente, agradeço a todos que eu conheci nesse grupo, e principalmente todos que eu considero como amigo de verdade. Mas o recado tá dado e vai ser poucas, obrigado a todos que foram coniventes com esse cu filho de verme, e quero que se foda. Esse verme do caralho vai acabar com o grupo e vocês vão ser coniventes com isso também, isso não é uma ameaça é uma jura.*')
		            		break
		         	case 'textaogabiru':
				    if (args.length < 1) return reply ('*Textao do Gabiru:*\n*Cara, tu acha que eu sou frustrado? E onde em sua sã consciência tu foi achar q eu invejo você cara? Vc já viu alguém invejar qm n tem nada? Inveja eu tenho do Bill Gates, de você eu tenho pena, o único lugar que você se sente alguém é auqi no grupo pq tem um monte de retardado que bota pilha nas merdas que você fala, na sua casa vive brigando com sua irmã e nem conversa com seus pais, msm assim eles tão aí pagando suas contas e te dando boa vida, certeza que sua família te deserdaria se visse oque você fala na internet, n tenho oq falar mais de você pq eu n vejo nada em você cara, é simplesmente NADA, então para de achar q vai se dar bem fzd textao e espelhando suas frustrações pessoas por favor.*')
		            		break
		        	case 'textaodanilo':
				    if (args.length < 1) return reply ('*Textao do Danilo:*\n@Gabiru Sales eu to ligado que vc é frustrado e acha que é invejado, mas pelo tempo que a gente ja discutiu, tudo que acontece no grupo vc me menciona e parece até que você inveja minha vida, então se vc acha que tá bonito da uma acalmada aí e pensa pq vc tá saindo como o cara que ngm liga mas dão ibope pq vc ja eh frustrado 😘✌🏻 seja menas*')
		            		break
		                case 'textaolevi':
				    if (args.length < 1) return reply ('*Textao do Levi:*\nEsse rapaz n tem o mínimo de QI So porque tirou uma nota boa no Enem, além disso argumentos q ele usa pra acabar com alguém : macaco , fotos de personagens aleatórios, pelo nome, só isso , o dia que ele tiver a habilidade q eu tenho em várias coisas, o dia q ele ser mais bonito q eu , eu tentaria algum argumento com ele caso contrário não me rebaixarei a tal nivel.*')
		            		break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
