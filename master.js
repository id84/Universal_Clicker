
		var totaltime = 0;
		var icqalert = new Audio("data:audio/wav;base64,UklGRgQnAABXQVZFZm10IBAAAAABAAEAIlYAACJWAAABAAgAZGF0YeAmAACAgICAgICAgH9/f39/f39/f39/gICAgICAgH9/f39/f3h0fHyFfIWIiYWBfn17eXl7foCCgoODgoCAgH+AgIB/f35/fn5+f4GBgYGCgIB+fn5+f3+AgICAgH9/gIB/f39/f4B+gIB/gIB/gX6AgH9/gICAgICBgICAf35+fnl6enx+fYGDhoOBg4KAfn5+fn19f36BgH+CgoCBgYKBfn+AfX5+gH6Aenl4fH2BhIuIfoKAgXp7fIGAgX16fn98foCDhYWFhYOAfXt7e3x/gH9/gYCBf4KChIWDhYOCgX1/ent7fH1+gIGDgYSBgoGAgICAgYF/f3+BgIB/gYKCgH+AgX59e359fXp9fn5/fYKBgYOBgoKCgoKEgoKDgoOCg4KBf3p5fHl7eX5/fH57fHx9gICEhoeKiImIhoaHhIaJiomLiIN5bmhgWVhfanmFkpqcmZSNhH56fICEiJKZoKSroXdLP0ZBPVN6nKmrpp2OeGNcX2ZyfouYoqKho6Olp6WOX0Y6OSw2VoKktr+9spRwU0lETV93j6WztrSqoZ6YnJZ2UTo6NzNCZpGtvMC5pIJgT0lKW3GMprO2tauimZOSimtUSEZBPlFujaKusaybfWFUTVJieY+ms7e2qp6Wk5ONbE8+Q0Y+S2+UqrCxq5h5X1BSV2l9lKm1tLSpnJWQjnlXTUtVR0tkhZebn5+XhW5fXWFqeY2dqq6xqpyWkZePb1I9QklIUW+TqKynoI51YVZaYnSFmKawsq2gmZOUk35fSkBLRkxhg5unpaGVgGlcW2Nyg5KjsbSuoZWVlpZ/WEI/TEZLYoagqqaglYFrWVphcIKSo7Gzq6CYmJiUeVZFQElDTmaInqiloZOAalpbYXKElKW1tquimpmWj2lHO0FJQ1d1l6espJ6OdGBVWmJ2iZyuu7Sqn5eXmIVVPjxJQ0dhgpyqrKOahm5cV1xnf5CktLmto52YlpFtRzxDSkNVdZWlraedj3dgVlphdIuaq7q0qZ+bmZqDUjs3RkFIZomjs7OmmoNpVFFXZn+Tpbu+s6WbmJGHXkE5RktHXX6bp66noJB0XlZZX3OImq67tK2jn5SLbko6PEhFV3SRo66qoZV+aVlcX22BkaW1saykoZqPfFhBPEhGTmqInKiso5qFcV5bX2l7jJ6vsa2mopuUh2FEOUdJSmGAmqWspp6MdmNbXmV2h5aps66noaGZjGZJPEVLSVx6laKnpZ+Se2ldYGZxgZKjsayno6SdkG5OPkFLSVd1lKGlpqCVfWteX2Rsfo6gsKyppKOcknpWRUFLSlRuip2jpp+Wg29iYGRsfIubq6yjoJ6ek4JlTURLT1BkgJehoqCZinVlX2RmdoeXpaulo56dl4xzU0hJUE1bdY6doKGckn1rYWJob4GQn6unoJ6Zlox/YVBLU1VYbYOVnJ6bkoRzZ2NmbHqLmaOnoJ6ZlZGIdltPUlhWXnWJl5qal45/bmdna3SDkpukopuXlI+Ig21aVFpcXGp9jZSYl5GGeGtoam96iZSfpZ6Yk5GKhH5pXFlgYGFwgIySlJKOg3dtbG1yfY2VnqCYlpGNioZ+aFtcYmFicoGMkZKRjYF1bW5wdYCNlp6elZKRjYV/e2pgYGVkZ3WAiY+Pj4qAdXFwcniEj5WcmpKPi4d/fn5xaGdraWlye4KIioyIgXp1dnd8ho2TmJWNi4iIgoJ/cWhoa2loc36FiYqLhoB5dnd4fYeNkZaTjYqIhYCBgnhsbW9taG94gISGioeDfHp7en6GjY6SkImHhYR/gIaBc3BycGhqc3t/g4iIhoF9fn6Ag4mMkY2GhYWDgH+GhXl1c3JqaW52fICHiYmFgX9/f4KHiY2Lh4OCgX9/goiEfnt2cWlpbHN3f4aKiomHhIODhoWHh4SCgoKBf4KGhYB/fXhwaWxucHZ9hImMjImJh4aFhIWCgH9+gH9+g4eIgoJ+eG5oampwdX2HjZGOjouIhYGBgH5+fYGBf4CEiYaDgn53a2hna211goyUlZSSjIeAfXp6enuAf4KDhYeJhYJ+eG5kY2VsdoSQmJ2blo2DenZ0dnl+goiHhoODgX17eHVubW5xd36JkJaWk46Hfnh2dnh8gYeKiIWDgnx5dnVxbm90eYCHjpKTkIyGf3t4eHl7gYWIhYOCgn97eXh1cnBydn6EiY6SkY2HgXx4eHp8f4SGh4SCgYB7enl4dnNzdnl/hImNkI+MhX97eHh6fIGEhoaEgoB/fHt6e3h3dXd6f4OHi46LiYWBfHl6en1+gYSEhIOBgH5+fHt5eHh4e36BhYiKiYiFgX58fH19gIGDgoGBgX99fn59fHx7fHt9f4KFhYaGhYKAfX5/fn5/gICAgYCAgIB/fn18e3t8fX+Bg4SFhYSCgX9/fn9/gH+AgICAgH+Af39+fX17e31/gYKDhIWFgoB/gH9+fn+Af3+AgYB/f3+Afn59fX59gH+BgoODg4KBgIB/f35/f3+AgICAgICAf399fX19fX5/gYKDg4OCgYCAf35/f4B/f4CAgICAgIB/fn59fn5/gICCgoGBgYCAf39/f3+AgICAf4B/f35/f39+fn5+fn9/gYCBgYKBgICAf39/gICAgH+Af3+Af39/gIB/gICAgIGBgIB/fn5+f39/gYGBgICAgH5+fX5+fn5+f39/f39/f39/gH9/f39/gH9/gICAgICAgICAf39/f39/gICAgoGCgYGBgICAgIGAgICAf359fX1+foCBgYGBgH9+fn5+fn9/gIGBgYB/fn18fH19fn+AgICAgICAgH9/f39/f4CAgYGBgYGBgICAgICAgYGBgYKBgYCAgH9+fn59fX1+fn+AgIGCgoKBgH9+fX1+fn+AgYGAgH59e3t8fH1+gICBgYGBgH9/f39/f39/f39/f3+Af39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f4CAgIB/f39/f39/f39/f39/f39/f39/f39/f3+Af39/f39/f39/f39/f39/f3+Af39/f39/f39/f39/gH9/gH9/f39/f39/f4B/f39/f39/f39/f39/f39/f4B/gH9/f39/f39/f4B/gH+Af39/f39/f39/f39/gICAgICAf39/f39/f4CAgH+Af4B/gH9/f4B/f39/gH9/f4CAgH9/gH9/f3+AgH+AgIB/f39/gH+AgH9/f4B/gH+AgICAf39/f39/f39/gH+Af4B/gH9/gIB/f3+Af4B/gH+Af4CAgICAf39/f39/f3+AgIB/gIB/f39/f39/f39/gH+Af4B/gH9/gH+Af3+AgH9/gIB/f39/f39/f4CAgH+AgH9/gH9/f3+AgICAgICAf4B/f39/f4CAgICAgH9/f4B/gH+Af4B/f4B/gH9/gH+Af4B/gICAgIB/f4CAgH9/f4B/gH+AgICAgH+Af4B/gH+AgIB/f4CAgH+AgH+Af39/gICAf4B/f39/f3+Af4B/gICAf4B/gH+Af3+AgIB/gH+Af3+AgIB/f3+Af39/gH9/gH+Af3+Af39/f4CAgICAf4B/f39/f39/f3+AgICAf4B/f39/f4B/gICAgICAf39/gH9/gIB/gICAgH9/f39/f3+Af4B/gH+Af4B/gICAgIB+gH+Af3+AgIB/f4B/f3+AgH+Af39/f4B/gH+AgIB/f4B/gH+Af4B/gIB/f3+AgH9/f3+AgH+AgH+Af4B/gIB/gH+Af4B/gICAf4CAgH9/gIB/f4GAgH9/f4B/f3+AgICAgH+AgIB/gH+Af39/f4B/gH9/f4CAgH9/f3+Af3+AgIB/gIB/f3+Af39/gH9/f4CAgIB/gX9/f39+f3+AgICAgIB/f3+AgH9/foB/f3+AgIB/gn6AfoB/gIB/gH9/f3+AgIB/gX+AfoB+gH+BgH+Af4B/foF/gH+AgH9/gICAf4CAf4B/gICAgH+AgIB/gH6Bf4B/gIF/gICBgH+Af4B/f4B/gX+Af4CAf39/gX+Af4CAgH9/f4CAgIGAgH+Af4B/foB/gX+BgICAgH9+f3+Afn+AgIF/gIGAgH5/foB/gICBgYB/f39/f4CAgIB/f39/f36AgICBf4CAgIB+gH+Af4CAgX+Af39/foB/gYCAgH9/fn9/foCAgX+BgIB/f4B/gICAgX9/f4B+gX+Af4B/fn+Af4B/gX+BfoF/gICBgYB/gH+Af4CBf39/gX6Af4B9fn9/f39/gYCBgIKAgn+Bf4CAgIGAgYCAgYCAf35+fH17fH1+f3+BgoOCgoKDgYGAgIB/gIKEg4SEhIOAfXl4dHRzdHV6foOGiouNiomFg399ent/g4mOkox/cWxra2tyfIWJiomDf3t8fH2AhIWIhoSBf4OIiZGTk4FwZGVlZWx6iI+Rj4uCfnh1dnV3e3+ChYeKiouNjo2Pj42GcmJfZWRmcYONkpKSj4Z8d3V0cnN2eoCFiI2QkZGRj46Ki4d4YF1kZmNsfouRlJOQi4J6d3NycHF0eX6FipKVl5SSj4qHiol+Y11iZWBndoeQlZeUj4l+dXBsamlvdn6Ijpebm5WRjYR+gIaOiHBiZmZgYHKDjpSalo+Gf3pwaWVna3J5go2WnJ6cmZGJgXx8fYqRfGFgaGZean+QlpmZk4l+eXNrY2RmbHF5hI+aoqKhnZeMgnh4eoaRf19bZ2ldZ4GWnZ2blYt+dW9qZGBiZWtyfYuYo6ep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Z15cXmVxf42drrrDw762rZZxW1dLNTJATlpndoiZn5+hoJaJfXJoX11faHKAjqCwur/CvLOokG1cWEg1NkVQW2l2iJednaGfl4t8cmdeXF9pdIOTpLS+wcK8sKOEZFpUQjQ6SlVhbHuNmZueoZ2UhntwZF5eY2x4hpept7zAv7ismnhhWlA9NEFPWGRwgJCYm5+fmpCCeW1jX2BmcH2MnK26vsC9s6eQb11WSzo2RVJdanaFk5qdnpuUi4F2amRiY2p0gY+fr7i7vryxooVqXlZENjxKU19seoqWm56dmpWHfHJpYmBlbXiFk6Wzub7AuK2bfGRdUT41QU1XZHB+jpebnpyWkIZ7b2dlZGhwe4iXqLO4vb62qZR0Y1tOOzhFUFxncoGRmZucmpaOg3huaGVlanN/i5ustLi/vbKkjG1hWUc4PElUYGh0h5SXmpyalouCd25nZWVrdYCMna2zusC7saKEamFXQjc/S1ZianiKlJebnZyViIB2bWViZWx1gI+jsbW9w7uunX1mXlI+OEJNWWNre42Vlpudm5OIgHZsZWRna3WAkaKvtbzCvKuafWdeUj45RE9bY2x7jJOWmZqYk4l/dm5oZmhudoKRo6+0vcG4qZZ3ZV1OOztHUV5ncH+Ok5aXlpaQhn53b2pnanF3gpOlrbO9w7mokHRnXUk4PElTXmdxg5CTl5mYl4+EfHRtaGZqcHiElqeutb3Dt6aPdGVdSjg9SVNdZ3GCj5OYmJaWkIV8dG5saWtxeoWVpKqxusC1pY90Z2BLOT5LUl1ocoKPlJaYl5SOhXtzbmtqa3J7hpelrLO8vrSljHFmX0g3PUpUX2dzhZGVl5eWlY2Ee3NtamltdHuHmqirsru/s6KKcGVeSDc/TlddZnSFjpKWmJmWjIV9dG1qamxyeYaYpaqzvcG0o41yZ19HN0BMVV1mc4WPk5eampeLhH1yamhoa3J6iJuorLS9wLKijnJkW0o5PkxVWmRzg46Tl5udl42Gf3RsaWlqb3mGlqSqsbm+s6SSd2diUD1ATVNYYW99iZCWnJ6YkImAdGpoZ2lveIaXpKyxuLy3ppN4Z2BTPjxJVFhfbn2KkZeanZqRiIB2bWloam52gpOhqK22u7WnmYBrZFpFPklTVlxqd4WOlJqhnZKLhnpsZmZoanSAj5+qr7e8ua2dh21jW0k8Q09VWmZ0go2UmJ+glo6HfnFoZ2dqcHqJmqartLu5r6ORdGZgUUBCTFRYYm98iJCWnKCZkYuCdWxoZ2ltdoSWoqqxuLqypZd8aGJYRUBKU1hga3eFjpSan5qRjIV4bGhnaGxzf5Gfp6+2urepnYtwYVxOP0JNVFpmcYGMk5ifn5eOh35yamdna3J5iJikqLG4uayglXtnYVdEQkxTVmBseYaPlZygmZGMg3ZsaGdobneClKCnr7W7tKWZiG1hXEs+RlBUXGh0g46UmJydloyEfHFraGhtdHuLm6Kqsbe3raCTemdgVkNAS1JXYW17iZCVnaCZkIqCd21qaWxwdoKSnaSts7iyp5yJb2ReTT9FT1RcZ3ODjZKZnpyUjYZ9cWtpam1ze4qZoaavtrWroZaAamBYSUFJUFZfa3eGkJecn5mTi4F2bGhmanB3gZKgpauxtrGlnI50ZGFVREROU1ljbnyKkZienpiQiH5yamdobHJ6h5eiqKyztKyhmYZtYV9RQ0dPVV1ncYGMk5qfnJSOhXtwaWdqbnV9jZyjqK+zs6ielIBoYlxLQktQVV9qdoWPmJ+fmpSMgXVrZ2Vpb3iDkqGnq7O1sKGYj3diX1lJRk5TWWRseYePlZ2emZKJgXZtaGdqcXiCkqGnq7K1r6ObinBjYFRFRk5UXGZvfoqTmp6cl4+HfXJraGhtcnqHlaCorrO0r6SZhmxiXlBBR05UXWdxgYySmp+clY6If3Nta2xvdHqHk52krLGzraSbhWxmX0xBSE9VXWh0g4yTmZ2bk4uHfnRubW5ydnyJlpyjq7O0qqKYf2plW0hDSU5WYGp4ho6WnJ2YkouFeXFta25yd4GQnKOpsri0qJ6JcWZdS0BFTFJbZnSCjZSan5yVjoh+dG5ra25yeYSSnaKqr7GvppyKcmdjU0NGTVFZY259ipKbnpyYkYmAc2xqa25yeouboqixubepnpJ6ZV5URUNLUVlkb3uHj5abnJiRjIR6cWxpa291f46cpKyzuLKnnY9zZF9SQ0VMUVplcH2JkJidnZeRi4N4cGtqbXF2g5Gepq20tq+mnIVuZV1MQkdOVF1ndIGMk5qenJaQioB1bWlqbXB4iJahp7K2tq2jln5qYldHQklOVWBrd4SOlZyempWOh31zbWtrbXJ7ipegqbO3tKqkknloYlNEQklPV2Fte4eQl52empKNhXtybGpsb3R/jZijrLO1s6ugjXRoYFBCRElPWWNvfYqTmZ6emJGLgndvamptcHeFlJ+nr7W2saaZg29lWklARk1TXGh1g42Um5+clpCJf3RtampscHqJl6Cqs7i3raOUe2phVERCSU5WYWx6h5CVm56ak42HfXRua2xucXyLl5+qs7i1raOReGphUEFDSE1XYW58iZGYnZ2YkoyFenJtbG1vdIGPmKKttLWzqZ6LdWddTUFESVBZZHJ/i5KanZyXkIuCeHFtbG5wdoKQmaKssrOxqZ+KdGhhT0JFSlBZY29+iJGZnJyXkYyEeXFtbG5vdoWSmqWvtbixp5qEcGVXRkBFSlJcaHaEjpSanpuVj4l/d3BtbG5weoiTm6axtrWuppmBbmRWRUJGSlNdaXeEjpWbnpuUj4l+dnBtbm9xeYeUm6SutLOuppmAb2dZRkNHS1JdZ3WDjJWanJqVkIp/d3Fvbm9xe4mUmaawtrKvpZV9b2RTQ0JGS1NeanmGj5ecnZmUjod9dXBubm9yfIqWm6axt7OspZJ6bmNQQkNGS1RfbHqHkZicnZmTjoZ8dnFvcHBzfYqUnKWtsrOro5J9bmZTRUVHTFVfanmFj5ebm5iUj4d9d3NwcHBzfYmTnKSss7OrpJF9cGZSRERHTFNeanmFkJebm5iUj4d9d3NycXF0fouUmqOttrOqoY57cGNMQ0VHTFVfbXyIkpibm5eTjYR7d3NxcHB1gIuUmaSwtbGqoIx9cWFLREZHS1RfbXyIkZicm5iTjYR7d3NxcHF3g46VnKewtK+mmod5bVxKRkhKT1dicX+JkZeamZaRi4N8eHVycXJ5hI6Um6evsq6kmIh6bVtKR0lJTldicn6JkZeamZaRi4J8eHRycXN7ho6UoKmxsa6jlYN4alVIR0hKUFpmdoKLk5ial5SPiIB7eHRzcnV/iZCWoamvr6qhkIB3aVNJSUpMUltodoOLk5iZl5OPh396d3Ryc3aBjJCZoqqwr6eejX92ZFBJSUpNUlxreISMk5ial5SOhoB7d3RycnmEi5GbpK2xrKabiX1yXU5JSUpNVWFue4aOlJiYlZKMhH96eHV0dX6HjZOdpq6uqaOVhnttV05LSUpPWGRyfoiQlpmYlJCKg315dnR0eIGJj5ejqq+sqJ+OgXZjUkxJSEtSXGp2g4uTmJmWk46GgHx4dnR1fIWMkpulrq6qpZeHfXBZT0tJSU1WYm98h46VmZiUkYqEf3t4dXV5gIeOlZ+nraqmoJCEemhWT01KS1FaZ3N/h4+Vl5WTj4mCfnt3dnd8hIuQmaKsrqmkmYuBc1xQTkpIS1NgbHmEjZSZmJWSi4R/fHd1dXqBiI2Wn6itq6afkIV7Z1VQTUpKUFpmcn6Hj5aXlZOPiIN/e3d2eH2Ei5GZo6qtqKSYi4JzXVNQS0hLU15rd4GKk5eXlZKMhoF9eHZ2eoCHjZWep6yqp6CSh31pWVJNSUlOV2NwfIWOlpiWlJCJg397d3Z3fIOJkJmiq62qpJuOhHRgVVBLR0pRXGl1gIqSl5eWk42Hgn55dnZ5gIaMlJ6nq6uooZSKfmpaVE5JSExVYW55g42Vl5eWkouGgXx4dnd7gYiOl6Gpq6qmnJCHeGRZU0xISlBZZHF9hY+Wl5eVkIqFgHt3dnh9g4mRmqSpq6mjmI2DcWBXT0lISlFcaHWAiZOYmZiUjomDfXh1dXh+hIuVnqisq6ihlYx9aVxUTUdHS1RfbHiDjZaZmZiTjYeBe3Z0dnp/hY6Yoqqsq6iek4h2ZVtRSUZHTVdib3uGkZiZmpiTjIZ/enZ0dnqAiJGbpKutq6WbkYRxYlhOR0VHTlllcn2KlJmbm5iSi4V+eHRzdnuBiZOdp6usq6SZj39tYFVMRkVIUFpodICMlpqcm5iSi4R9d3RzdnuBipSeqKutqqKZjn1rYFRLRUNIUFpodICOlpuenJiTjIV9d3NzdXmAiZSepqutqqKajn1tYVRLRUNHT1pmcoGOlpyfn5uVjoZ+d3NydHh+h5KdpaqtqqOcj35vYlRKRENFTVhkcYCNlp2hoJ2YkId/eXRyc3Z8hZCbo6msqqWdkIByZFZLREJESlVhbn6LlZ6io6CclIuCe3RxcXR5go2Yn6erqqafkoR2Z1hMREFCR1Fda3uJlJ6lp6ahmZCGfXZxb3F1fomSnKWpqqihlYh5aVpNRD8/RE1ZaHiHlaCoq6qmnpSKf3ZwbW1xeYONmKGnqamimIx9bV1QRj8+QkpWZXWFlKCpra6qo5mOg3lxbWxvdX6Hkpyipqeimo+CcmJVSkNAQkhTYnGBkJ2nra+tpp6TiH10b2xtcnmCjJWcoaOgm5KGd2lbUUhERElSXmx7i5ijq66uqaKYjoN6c25tcHR8hY2Vmp6dmpOJfXBkWVBKSUtRW2d1hJGdpausqqWdk4mAeHJvcHJ3foaMk5eYl5OLgndsYllTT09UW2RwfYqVnqWoqKWgmI+GfndzcXJ0eX+Fi4+Sk5GMhX10a2NcWFZYXGNsd4KNlp6jpaSgmpSMhH14dHNzdnp/g4iLjY6Lh4F7c2tlYF1dX2Rqc3yGjpacn6Cfm5aQiYN9eHZ0dXd6f4OGiIqJh4N/eXNtaGVjY2ZqcHiAiI+VmpycmpeSjIaBfHh2dXZ4e36ChYeHh4SBfXhzb2tpaGlrcHV8g4mPlJeYmJaSjomEf3t4d3Z3eXt+gYOFhYSDgHx5dXFvbWxucHR5foSJjpGUlJSSj4uGgn57eHd3eHl8foCCg4SDgoB9end0c3FxcnV4fICEiIyOkJCPjouIhIF+e3p5eHl6fH5/gYKCgoF/fXt5d3Z1dXd4e36BhIeJi4yMi4mHhYKAfXx6enp6e31+gIGBgoGBf358e3p5eHh5e3x/gYOFh4iJiYiHhYOBf358e3t7e3x9fn+AgIGAgH9/fn18e3t8fH1+gIGChIWFhoWFhIOCgH9+fX19fH19fn5/f4CAgIB/f35+fX19fX5+f4CBgoKDhISDg4KCgYB/fn59fX19fn5/f4CAgICAgIB/f39+fn5/f3+AgIGBgoKCgoGBgYCAf39+fn5+fn5/f3+AgICAgICAgH9/f39/f3+AgICAgYGBgYGBgICAf39/f35+fn9/f3+AgICAgICAgICAf39/f3+AgICAgICAgICAgICAf39/f39/f39/f3+AgICAgICAgICAgICAgICAgICAgICAgICAgICAf39/f39/f39/f3+AgICAgICAgICAgICAgICAgICAgICAgICAgICAf39/f39/f39/f3+AgICAgICAgICAgICAgIB/gICAgICAgICAgICAgIB/f39/f39/f39/gICAgICAgICAgICAgICAgICAgICAgICAgICAf39/f39/f39/f39/gICAgICAgICAgICAgICAf4CAgICAgICAgH9/f39/f39/f39/f39/f4CAgICAgICAgICAgICAgICAgIB/f39/f39/f39/f39/f39/f39/f4B/f4B/f3+Af39/gH9/gICAgH+Af39/f39/f39/f39/f4B/f4CAgH+Af4CAf3+Af39/gIB/f4CAf3+Af39/f39/f39/f39/f39/f3+Af39/f4B/f39/f39/f39/f4B/f39/gIB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/");


		var internets = 10000;
		var heat = 0;
		var fame = 0;
		var money = 0;
		var drama = 0;
		var memes = 0;
		var science = 0;

		var iadd = 0;
		var fadd = 0;
		var madd = 0;
		var hadd = 0;
		var dadd = 0;
		var meadd = 0;
		var sadd = 0;



		var townarr = [];





		//Heartbeat
		setInterval(function () {

			iadd = 0;
			fadd = 0;
			madd = 0;
			hadd = 0;
			dadd = 0;
			meadd = 0;
			sadd = 0;


			if (internets <= 0) {
				alert("alert");
			}


			for (i = 0; i < allposters.length; i++) {
				if (allposters[i].count > 0) {
					switch (allposters[i].p1type) {
						case ("internets"):
							iadd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("fame"):
							fadd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("money"):
							madd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("heat"):
							hadd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("drama"):
							dadd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("memes"):
							meadd += allposters[i].p1rate * allposters[i].count;
							break;
						case ("science"):
							sadd += allposters[i].p1rate * allposters[i].count;
							break;
					}
					switch (allposters[i].p2type) {
						case ("internets"):
							iadd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("fame"):
							fadd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("money"):
							madd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("heat"):
							hadd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("drama"):
							dadd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("memes"):
							meadd += allposters[i].p2rate * allposters[i].count;
							break;
						case ("science"):
							sadd += allposters[i].p2rate * allposters[i].count;
							break;
					}
				}
			}

			internets += iadd;
			fame += fadd;
			money += madd;
			heat += hadd;
			drama += dadd;
			memes += meadd;
			science += sadd;

			redrawscoreboard();
			redrawpop();
		}, 1000);

















		function townzoom() {
			var f = parseFloat(document.getElementById("townrange").value);
			document.getElementById("townspan").style.fontSize = f.toString() + "%";

		}



		function redrawwiki() {
			document.getElementById("wikiposters").innerHTML = "";
			for (let i = 0; i < allregularposters.length; i++) {
				const element = allregularposters[i];
				//wiki is full of spoilers
				var s = "<li class=\"wkli\"><button class=\"wkbtn\" onclick=\"staticposterarticle("+i+")\">" + emojify(element.name,1) + "</button></li>";
				document.getElementById("wikiposters").innerHTML += s;
			}
			document.getElementById("wikiinterlopers").innerHTML = "";
			for (let i = 0; i < interlopers.length; i++) {
				const element = interlopers[i];
				//wiki is full of spoilers
				var s = "<li class=\"wkli\"><button class=\"wkbtn\" onclick=\"interloperarticle("+i+")\">" + emojify(element.name,1) + "</button></li>";
				document.getElementById("wikiinterlopers").innerHTML += s;
			}



		}


		function redrawscoreboard() {
			document.getElementById("scorepanel").innerHTML = "<table class=" + '"scoretext"' + ">" +
				"<tr><th  style=" + '"width:70%"' + ">" + internets.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("internets") + "</th><th  style=" + '"width:20%"' + ">" + iadd.toLocaleString('en-GB') + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + heat.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("heat") + "</th><th  style=" + '"width:20%"' + ">" + hadd.toLocaleString('en-GB') + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + fame.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("fame") + "</th><th  style=" + '"width:20%"' + ">" + fadd.toLocaleString('en-GB') + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + money.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("money") + "</th><th  style=" + '"width:20%"' + ">" + madd.toLocaleString('en-GB') + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + drama.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("drama") + "</th><th  style=" + '"width:20%"' + ">" + dadd.toLocaleString('en-GB') + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + memes.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("memes") + "</th><th  style=" + '"width:20%"' + ">" + meadd + "/s</th></tr>" +
				"<tr><th  style=" + '"width:70%"' + ">" + science.toLocaleString('en-GB') + "</th><th  style=" + '"width:10%"' + "> " + emojify("science") + "</th><th  style=" + '"width:20%"' + ">" + sadd.toLocaleString('en-GB') + "/s</th></tr>" +
				"</table>";
		}

		function redrawpop() {
			prettypoptable(networkposters, "networkpop");
			if (NormiesResearch.researched) {
				prettypoptable(normieposters, "normiepop1");
			}
			if (AdvNormiesResearch.researched) {
				prettypoptable(advancednormieposters, "normiepop2");
			}
			if (NeetResearch.researched) {
				prettypoptable(neetposters, "neetpop1");
			}
			if (AdvNeetResearch.researched) {
				prettypoptable(advancedneetposters, "neetpop2");
			}
		}


		function prettypoptable(arr, html) {
			document.getElementById(html).innerHTML = "";
			arr.forEach(element => document.getElementById(html).innerHTML += '<td style ="width:10%">' + emojify(element.name) + '</td><td style="width:15%" class="logtext">' + element.count + "</td>");
		}




		function redrawshoponrequest() {
			document.getElementById("network").innerHTML = "";
			document.getElementById("normie").innerHTML = "";
			document.getElementById("neet").innerHTML = "";
			document.getElementById("neet").innerHTML = "";
			for (let i = 0; i < allposters.length; i++) {
				if (allposters[i].revealed == true) {
					document.getElementById(allposters[i].type).innerHTML += '<button class="btn" id="' + allposters[i].name + '"onmouseout="cleartooltip()" onmouseover="tooltips(' + allposters[i].name + ')" onClick="buybtnclick(' + allposters[i].name + ')">Recruit' + emojify(allposters[i].name) + "</button>";
				} else {
				}
			}

		}

		function redrawresearchonrequest() {
			var str = "";
			document.getElementById("research").innerHTML = "";
			document.getElementById("tnormie").innerHTML = "";
			document.getElementById("tneet").innerHTML = "";
			document.getElementById("tintrlpr").innerHTML = "";
			document.getElementById("tevent").innerHTML = "";
			for (let i = 0; i < allresearch.length; i++) {
				if (allresearch[i].revealed == true) {
					if (allresearch[i].researched == true) { str = "✔️"; }
					document.getElementById(allresearch[i].type).innerHTML += '<td><button class="btn" id="' + allresearch[i].name + '"onmouseout="cleartooltip()" onmouseover="tooltips(' + allresearch[i].name + ')" onClick="resbtnclick(' + allresearch[i].name + ')">' + allresearch[i].prettyname + str + "</button></td>";
				}
				str = "";
			}

		}

		function rendertown(r) {
			var s = "";
			var nskip = 0;
			var tpop = 0;
			townarr = [];
			document.getElementById("townspan").innerHTML = "";
			document.getElementById("townspan").innerHTML = "";
			for (let i = 0; i < allposters.length; i++) {
				tpop += allposters[i].count;
			}

			nskip = Math.floor(tpop / 100);

			for (let i = 0; i < allposters.length; i++) {
				if (allposters[i].count >= 1) {

					for (let x = 0; x < allposters[i].count; x++) {

						switch (allposters[i].name) {
							case "Glowie":
								s = "<span class=\"glow\" onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Random") + "</span>";
								break;
							case "Lizard":
								var cb = document.getElementById("snglschbx");
								if (cb.checked) {
									s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Lizard") + "</span>";
								} else {
									s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify("Random") + "</span>";
								}
								break;
							default:
								if (allposters[i].type === "interloper") { s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify(allposters[i].name) + "</span>"; break; }
								s = "<span onmouseout=\"cleartooltip()\" onmouseover=\"tooltip(\'" + allposters[i].name + "\')\" onclick=removefromtown(\"" + i.toString() + "\")>" + emojify(allposters[i].name) + "</span>";
								break;
						}
						x += nskip;
						townarr.push(s);
					}
				}
			}
			if (r) {
				for (let i = townarr.length - 1; i > 0; i--) {
					const j = getRandomInt(townarr.length);
					[townarr[i], townarr[j]] = [townarr[j], townarr[i]];
				}
			}
			document.getElementById("townspan").innerHTML = townarr.join("");
			var s = "You can click on a poster to remove one from network.";
			if (nskip > 1) { s = "Each character represents up to " + nskip + " posters. " + s; }
			document.getElementById("networkdata").innerHTML = s;
		}

		function removefromtown(a) {
			//a is index from allposters!
			//interloper must be researched first!
			

			var i = parseInt(a);
			var sn = allposters[i].name;
			var n = 1;
			if(MassBans.researched) {n=50};
			switch (sn) {
				case "Glowie":
					if (GlowieResearch.researched) { workremovefromtown(a,n); }
					else {
						popalert("You are too fascinated by the glow to remove!<br>Research " + '<span style="font-weight: bold;">' + GlowieResearch.prettyname + "</span> to withstand the glow!");
						GlowieResearch.revealed = true;
					}
					break;
				case "Lizard":
					if (LizardResearch.researched) { workremovefromtown(a,n); }
					else {
						popalert("You are just not sure about banning this one!<br>Research " + '<span style="font-weight: bold;">' + LizardResearch.prettyname + "</span> to understand why!");
						LizardResearch.revealed = true;
					}
					break;
					case "Shitposter":
						if (ShiposterResearch.researched) { workremovefromtown(a,n); }
						else {
							popalert("There has to be a way to get rid of these!<br>Research " + '<span style="font-weight: bold;">' + ShiposterResearch.prettyname + "</span> to remove them without getting some on yourself!");
							ShiposterResearch.revealed = true;
						}
						break;


					
				case "Cyber Revolutionary":
					if (CRevolutionaryResearch.researched) { workremovefromtown(a,n); }
					else {
						popalert("You are too baffled by the slogans to ban this!<br>Research " + '<span style="font-weight: bold;">' + CRevolutionaryResearch.prettyname + "</span> to learn non-politics.");
						CRevolutionaryResearch.revealed = true;
					}
					break;
				case "Cyber Skeleton":
					if (CSkeletonResearch.researched) { workremovefromtown(a,n); }
					else {
						popalert("You are too spooked to do that!<br>Research " + '<span style="font-weight: bold;">' + CSkeletonResearch.prettyname + "</span> to face your fears!")
						CSkeletonResearch.revealed = true;
					}
					break;
					case "Cyber Edgey":
						if (CEdgeyResearch.researched) { workremovefromtown(a,n); }
						else {
							popalert("You don't know how to approach this one it is too edgy!<br>Research " + '<span style="font-weight: bold;">' + CEdgeyResearch.prettyname + "</span> to avoid further cuts!")
							CEdgeyResearch.revealed = true;
						}
						break;
						case "Cyber Blob":
							if (CBlobResearch.researched) { workremovefromtown(a,n); }
							else {
								popalert("It just grows when you click on it! How can this be contained?<br>Research " + '<span style="font-weight: bold;">' + CBlobResearch.prettyname + "</span> to deal with it!")
								CBlobResearch.revealed = true;
							}
							break;
				default:
					workremovefromtown(a,n);
					break;
			}

		}

		function workremovefromtown(a,n) {
			var i = parseInt(a);
			allposters[i].count -= n;
			if (allposters[i].count < 0){allposters[i].count = 0;}
			
			rendertown(true);
			redrawscoreboard();
			redrawpop();
		}

		function resbtnclick(a) {

			if (a.researched) {
				popalert(a.html)
			} else {
				if (buyaction(a, 1)) {
					workResearch(a, true)
				} else { popalert("You cannot afford this Research!") }
			}
		}

		function workResearch(a, b) {
			for (i = 0; i < a.unlocks.length; i++) {
				a.unlocks[i].revealed = true;
			}
			a.researched = true;
			if (b) {

				popalert(a.html);
			}
			redrawresearchonrequest();
			switch (a.name) {
				case "NormiesResearch":
					document.getElementById("normierangelbl").style.display = "block";
					document.getElementById("normierange").style.display = "block";
					break;
				case "NeetResearch":
					document.getElementById("neetrangelbl").style.display = "block";
					document.getElementById("neetrange").style.display = "block";
					break;
			}

		}


		function buybtnclick(a) {
			var rv = 0;
			switch (a.type) {
				case "network":
					rv = parseInt(document.getElementById("networkrange").value);
					break;
				case "normie":
					rv = parseInt(document.getElementById("normierange").value);
					break;
				case "neet":
					rv = parseInt(document.getElementById("neetrange").value);
					break;
			}


			if (buyaction(a, rv)) {
				a.count += rv;
				redrawscoreboard();
				redrawpop();
			} else { popalert("You cannot afford this! Maybe you should fiddle with the multiplier range?") }
		}

		function buyaction(a, rv) {
			var c1 = false;
			var c2 = false;
			var c1c = 0;
			var c2c = 0;
			switch (a.c1type) {
				case ("internets"): if ((a.c1rate * rv) <= internets) { c1 = true; c1c = (a.c1rate * rv); } break;
				case ("fame"): if ((a.c1rate * rv) <= fame) { c1 = true; c1c = (a.c1rate * rv); } break;
				case ("money"): if ((a.c1rate * rv) <= money) { c1 = true; c1c = (a.c1rate * rv); } break;
				case ("drama"): if ((a.c1rate * rv) <= drama) { c1 = true; c1c = (a.c1rate * rv); } break;
				case ("memes"): if ((a.c1rate * rv) <= memes) { c1 = true; c1c = (a.c1rate * rv); } break;
				case ("science"): if ((a.c1rate * rv) <= science) { c1 = true; c1c = (a.c1rate * rv); } break;
			}
			switch (a.c2type) {
				case ("internets"): if ((a.c2rate * rv) <= internets) { c2 = true; c2c = (a.c2rate * rv); } break;
				case ("fame"): if ((a.c2rate * rv) <= fame) { c2 = true; c2c = (a.c2rate * rv); } break;
				case ("money"): if ((a.c2rate * rv) <= money) { c2 = true; c2c = (a.c2rate * rv); } break;
				case ("drama"): if ((a.c2rate * rv) <= drama) { c2 = true; c2c = (a.c2rate * rv); } break;
				case ("memes"): if ((a.c2rate * rv) <= memes) { c2 = true; c2c = (a.c2rate * rv); } break;
				case ("science"): if ((a.c2rate * rv) <= science) { c2 = true; c2c = (a.c2rate * rv); } break;
				case (0): c2 = true; break;
			}

			if (c1 && c2) {
				switch (a.c1type) {
					case ("internets"): internets -= c1c; break;
					case ("fame"): fame -= c1c; break;
					case ("money"): money -= c1c; break;
					case ("drama"): drama -= c1c; break;
					case ("memes"): memes -= c1c; break;
					case ("science"): science -= c1c; break;
				}
				switch (a.c2type) {
					case ("internets"): internets -= c2c; break;
					case ("fame"): fame -= c2c; break;
					case ("money"): money -= c2c; break;
					case ("drama"): drama -= c2c; break;
					case ("memes"): memes -= c2c; break;
					case ("science"): science -= c2c; break;
				}
				return true;
			} else {
				return false;
			}
		}


		function addInterloper(a) {
			switch (a) {
				case "Glowie":
					Glowie.count += 1;
					break;
				case "Lizard":
					Lizard.count += 1;
					break;
				case CSkeleton:
					CSkeleton.count += 1;
					break;
				case CBlob:
					CBlob.count += 1;
					break;
				case CEdgey:
					CEdgey.count += 1;
					break;
				case CRevolutionary:
					CRevolutionary.count += 1;
					break;
			}


		}












