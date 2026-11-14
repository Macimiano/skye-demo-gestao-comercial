'use strict';
const DEMO_SEED={"products":[{"code":"MCP-330","category":"Monte seu copo","name":"Monte seu copo","size_ml":330,"price_cents":2000,"description":"Até 3 bases e até 6 acompanhamentos grátis. Premium cobrado à parte.","mode":"fixed","review":"Transcrito da foto"},{"code":"MCP-440","category":"Monte seu copo","name":"Monte seu copo","size_ml":440,"price_cents":2400,"description":"Até 3 bases e até 6 acompanhamentos grátis. Premium cobrado à parte.","mode":"fixed","review":"Transcrito da foto"},{"code":"MCP-550","category":"Monte seu copo","name":"Monte seu copo","size_ml":550,"price_cents":2700,"description":"Até 3 bases e até 6 acompanhamentos grátis. Premium cobrado à parte.","mode":"fixed","review":"Transcrito da foto"},{"code":"MCP-770","category":"Monte seu copo","name":"Monte seu copo","size_ml":770,"price_cents":3200,"description":"Até 3 bases e até 6 acompanhamentos grátis. Premium cobrado à parte.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-CLA-330","category":"Combinações prontas","name":"Clássico","size_ml":330,"price_cents":2000,"description":"Açaí, banana, leite em pó e leite condensado.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-CLA-550","category":"Combinações prontas","name":"Clássico","size_ml":550,"price_cents":2700,"description":"Açaí, banana, leite em pó e leite condensado.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-SEN-330","category":"Combinações prontas","name":"Sensação","size_ml":330,"price_cents":2500,"description":"Açaí, Nutella, mousse de morango e morango.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-SEN-550","category":"Combinações prontas","name":"Sensação","size_ml":550,"price_cents":3300,"description":"Açaí, Nutella, mousse de morango e morango.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-MAR-330","category":"Combinações prontas","name":"Maracujá Dourado","size_ml":330,"price_cents":2200,"description":"Açaí, leite em pó, mousse de maracujá e Ouro Branco.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-MAR-550","category":"Combinações prontas","name":"Maracujá Dourado","size_ml":550,"price_cents":2900,"description":"Açaí, leite em pó, mousse de maracujá e Ouro Branco.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-KID-330","category":"Combinações prontas","name":"Kids","size_ml":330,"price_cents":2000,"description":"Açaí, leite em pó, leite condensado e confete.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-KID-550","category":"Combinações prontas","name":"Kids","size_ml":550,"price_cents":2700,"description":"Açaí, leite em pó, leite condensado e confete.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-PAC-330","category":"Combinações prontas","name":"Paçokita","size_ml":330,"price_cents":2000,"description":"Açaí, leite condensado, leite em pó, paçoca e banana.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-PAC-550","category":"Combinações prontas","name":"Paçokita","size_ml":550,"price_cents":2700,"description":"Açaí, leite condensado, leite em pó, paçoca e banana.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-SON-330","category":"Combinações prontas","name":"Sonho de Valsa","size_ml":330,"price_cents":2200,"description":"Açaí, Sonho de Valsa, creme de avelã e paçoca.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-SON-550","category":"Combinações prontas","name":"Sonho de Valsa","size_ml":550,"price_cents":2900,"description":"Açaí, Sonho de Valsa, creme de avelã e paçoca.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-NIN-330","category":"Combinações prontas","name":"Ninho com Nutella","size_ml":330,"price_cents":3100,"description":"Açaí, creme de Ninho, Nutella e morango.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-NIN-550","category":"Combinações prontas","name":"Ninho com Nutella","size_ml":550,"price_cents":3800,"description":"Açaí, creme de Ninho, Nutella e morango.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-FIT-330","category":"Combinações prontas","name":"Fit","size_ml":330,"price_cents":2500,"description":"Açaí zero, granola, morango e banana.","mode":"fixed","review":"Transcrito da foto"},{"code":"COM-FIT-550","category":"Combinações prontas","name":"Fit","size_ml":550,"price_cents":3000,"description":"Açaí zero, granola, morango e banana.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-ACA-330","category":"Sem acompanhamentos","name":"Açaí","size_ml":330,"price_cents":1400,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-ACA-440","category":"Sem acompanhamentos","name":"Açaí","size_ml":440,"price_cents":1600,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-ACA-550","category":"Sem acompanhamentos","name":"Açaí","size_ml":550,"price_cents":1900,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-ACA-770","category":"Sem acompanhamentos","name":"Açaí","size_ml":770,"price_cents":2400,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-CUP-330","category":"Sem acompanhamentos","name":"Cupuaçu","size_ml":330,"price_cents":1400,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-CUP-440","category":"Sem acompanhamentos","name":"Cupuaçu","size_ml":440,"price_cents":1600,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-CUP-550","category":"Sem acompanhamentos","name":"Cupuaçu","size_ml":550,"price_cents":1900,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"SEM-CUP-770","category":"Sem acompanhamentos","name":"Cupuaçu","size_ml":770,"price_cents":2400,"description":"Sem acompanhamentos.","mode":"fixed","review":"Transcrito da foto"},{"code":"VIT-CLA-500","category":"Vitamina de açaí","name":"Clássico","size_ml":500,"price_cents":2000,"description":"Açaí, leite, banana, leite em pó e leite condensado.","mode":"fixed","review":"Transcrito da foto"},{"code":"VIT-PAC-500","category":"Vitamina de açaí","name":"Paçoçaçaí","size_ml":500,"price_cents":2100,"description":"Açaí, leite, banana, paçoca e leite condensado.","mode":"fixed","review":"Transcrito da foto"},{"code":"VIT-TRO-500","category":"Vitamina de açaí","name":"Tropical","size_ml":500,"price_cents":2200,"description":"Açaí, leite, leite condensado e mousse de maracujá.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-NUT-330","category":"Milkshake","name":"Nutella","size_ml":330,"price_cents":2000,"description":"Creme americano, leite e Nutella.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-NUT-550","category":"Milkshake","name":"Nutella","size_ml":550,"price_cents":2300,"description":"Creme americano, leite e Nutella.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-OVO-330","category":"Milkshake","name":"Ovomaltine","size_ml":330,"price_cents":1800,"description":"Creme americano, leite e Ovomaltine.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-OVO-550","category":"Milkshake","name":"Ovomaltine","size_ml":550,"price_cents":2100,"description":"Creme americano, leite e Ovomaltine.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-FVE-330","category":"Milkshake","name":"Frutas vermelhas","size_ml":330,"price_cents":1800,"description":"Creme americano, leite e geleia de frutas vermelhas.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-FVE-550","category":"Milkshake","name":"Frutas vermelhas","size_ml":550,"price_cents":2100,"description":"Creme americano, leite e geleia de frutas vermelhas.","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-FIN-330","category":"Milkshake","name":"Fini","size_ml":330,"price_cents":1800,"description":"Creme americano, leite e Fini (dentadura, beijos ou banana).","mode":"fixed","review":"Transcrito da foto"},{"code":"MIL-FIN-550","category":"Milkshake","name":"Fini","size_ml":550,"price_cents":2100,"description":"Creme americano, leite e Fini (dentadura, beijos ou banana).","mode":"fixed","review":"Transcrito da foto"},{"code":"SAL-330","category":"Salada de frutas","name":"Salada de frutas","size_ml":330,"price_cents":1890,"description":"Morango, banana, manga e uva. Leite condensado, mel, leite em pó e granola. Escolhas incluídas no valor.","mode":"fixed","review":"Limites de frutas e acompanhamentos não informados"},{"code":"SAL-440","category":"Salada de frutas","name":"Salada de frutas","size_ml":440,"price_cents":2190,"description":"Morango, banana, manga e uva. Leite condensado, mel, leite em pó e granola. Escolhas incluídas no valor.","mode":"fixed","review":"Limites de frutas e acompanhamentos não informados"},{"code":"SAL-550","category":"Salada de frutas","name":"Salada de frutas","size_ml":550,"price_cents":2590,"description":"Morango, banana, manga e uva. Leite condensado, mel, leite em pó e granola. Escolhas incluídas no valor.","mode":"fixed","review":"Limites de frutas e acompanhamentos não informados"},{"code":"FON-MED","category":"Fondue","name":"Fondue médio","size_ml":null,"price_cents":2990,"description":"Morango, banana, manga e uva. Escolhas de acompanhamentos e adicionais na aba Opções.","mode":"fixed","review":"Tamanho médio. Quantidade e limites de escolhas não informados"},{"code":"PESO-KG","category":"Venda por peso","name":"Açaí por quilo","size_ml":null,"price_cents":null,"description":"Captura de peso líquido, tara e preço por kg. Até validar a balança, prever digitação manual.","mode":"weight","review":"Preço/kg e modelo da balança pendentes"},{"code":"SORVETE-KG","name":"Sorvete por peso","category":"Venda por peso","size_ml":null,"mode":"weight","price_cents":null,"description":"Venda por peso líquido ou pelo valor em reais mostrado na balança.","review":"Preço por kg a confirmar com a loja."}],"groups":[{"category":"Monte seu copo","key":"base","title":"Bases","max_choices":3,"min_choices":1},{"category":"Monte seu copo","key":"included","title":"Acompanhamentos grátis","max_choices":6,"min_choices":0},{"category":"Monte seu copo","key":"premium","title":"Premium","max_choices":null,"min_choices":0},{"category":"Fondue","key":"premium","title":"Adicionais","max_choices":null,"min_choices":0},{"category":"Salada de frutas","key":"fruits","title":"Frutas","max_choices":null,"min_choices":0},{"category":"Salada de frutas","key":"toppings","title":"Acompanhamentos","max_choices":null,"min_choices":0},{"category":"Fondue","key":"fruits","title":"Frutas","max_choices":null,"min_choices":0},{"category":"Fondue","key":"toppings","title":"Acompanhamentos","max_choices":null,"min_choices":0}],"options":[{"code":"OP-001","category":"Monte seu copo","group_key":"base","name":"Açaí","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-002","category":"Monte seu copo","group_key":"base","name":"Açaí com banana","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-003","category":"Monte seu copo","group_key":"base","name":"Açaí com paçoca","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-004","category":"Monte seu copo","group_key":"base","name":"Açaí com iogurte grego","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-005","category":"Monte seu copo","group_key":"base","name":"Açaí com morango grego","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-006","category":"Monte seu copo","group_key":"base","name":"Creme de cupuaçu","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-007","category":"Monte seu copo","group_key":"base","name":"Açaí com chocolate belga","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-008","category":"Monte seu copo","group_key":"base","name":"Açaí com creme de avelã","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-009","category":"Monte seu copo","group_key":"base","name":"Açaí creminho de leite","price_cents":0,"review":"Até 3 opções. Quantidade mínima não informada."},{"code":"OP-010","category":"Monte seu copo","group_key":"included","name":"Leite condensado","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-011","category":"Monte seu copo","group_key":"included","name":"Leite em pó","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-012","category":"Monte seu copo","group_key":"included","name":"Paçoca","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-013","category":"Monte seu copo","group_key":"included","name":"Confete","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-014","category":"Monte seu copo","group_key":"included","name":"Flocos de arroz","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-015","category":"Monte seu copo","group_key":"included","name":"Granola","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-016","category":"Monte seu copo","group_key":"included","name":"Granulado","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-017","category":"Monte seu copo","group_key":"included","name":"ChocoPower (mini mesclado)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-018","category":"Monte seu copo","group_key":"included","name":"Amendoim triturado","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-019","category":"Monte seu copo","group_key":"included","name":"Sucrilhos","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-020","category":"Monte seu copo","group_key":"included","name":"Jujuba","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-021","category":"Monte seu copo","group_key":"included","name":"Farinha láctea","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-022","category":"Monte seu copo","group_key":"included","name":"Mousse de maracujá","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-023","category":"Monte seu copo","group_key":"included","name":"Mousse de morango","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-024","category":"Monte seu copo","group_key":"included","name":"Mousse de limão","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-025","category":"Monte seu copo","group_key":"included","name":"Creme de avelã","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-026","category":"Monte seu copo","group_key":"included","name":"Banana (fruta)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-027","category":"Monte seu copo","group_key":"included","name":"Morango (fruta)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-028","category":"Monte seu copo","group_key":"included","name":"Manga (fruta)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-029","category":"Monte seu copo","group_key":"included","name":"Uva (fruta)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-030","category":"Monte seu copo","group_key":"included","name":"Mel","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-031","category":"Monte seu copo","group_key":"included","name":"Cobertura Fini (sabores)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-032","category":"Monte seu copo","group_key":"included","name":"Cobertura (sabores)","price_cents":0,"review":"Até 6 opções grátis. Sabores das coberturas não especificados."},{"code":"OP-033","category":"Monte seu copo","group_key":"premium","name":"Nutella","price_cents":800,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-034","category":"Monte seu copo","group_key":"premium","name":"Creme de Ninho","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-035","category":"Monte seu copo","group_key":"premium","name":"Creme de Ovomaltine","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-036","category":"Monte seu copo","group_key":"premium","name":"Creme Cookies Cream","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-037","category":"Monte seu copo","group_key":"premium","name":"Kit Kat","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-038","category":"Monte seu copo","group_key":"premium","name":"Trento","price_cents":500,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-039","category":"Monte seu copo","group_key":"premium","name":"Sonho de Valsa","price_cents":400,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-040","category":"Monte seu copo","group_key":"premium","name":"Bis Branco","price_cents":400,"review":"Preço diferente do fondue. Confirmar se é intencional."},{"code":"OP-041","category":"Monte seu copo","group_key":"premium","name":"Ouro Branco","price_cents":300,"review":"Preço diferente do fondue. Confirmar se é intencional."},{"code":"OP-042","category":"Monte seu copo","group_key":"premium","name":"Bis Preto","price_cents":300,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-043","category":"Monte seu copo","group_key":"premium","name":"Ovomaltine","price_cents":300,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-044","category":"Monte seu copo","group_key":"premium","name":"Choco Ball","price_cents":200,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-045","category":"Fondue","group_key":"premium","name":"Nutella","price_cents":800,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-046","category":"Fondue","group_key":"premium","name":"Creme de Ninho","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-047","category":"Fondue","group_key":"premium","name":"Creme de Ovomaltine","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-048","category":"Fondue","group_key":"premium","name":"Trento","price_cents":500,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-049","category":"Fondue","group_key":"premium","name":"Kit Kat","price_cents":600,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-050","category":"Fondue","group_key":"premium","name":"Sonho de Valsa","price_cents":400,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-051","category":"Fondue","group_key":"premium","name":"Ouro Branco","price_cents":400,"review":"Preço diferente do copo. Confirmar se é intencional."},{"code":"OP-052","category":"Fondue","group_key":"premium","name":"Bis Branco","price_cents":300,"review":"Preço diferente do copo. Confirmar se é intencional."},{"code":"OP-053","category":"Fondue","group_key":"premium","name":"Bis Preto","price_cents":300,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-054","category":"Fondue","group_key":"premium","name":"Choco Ball","price_cents":200,"review":"Cobrado à parte. Limite não informado."},{"code":"OP-055","category":"Salada de frutas","group_key":"fruits","name":"Morango","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-056","category":"Salada de frutas","group_key":"fruits","name":"Banana","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-057","category":"Salada de frutas","group_key":"fruits","name":"Manga","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-058","category":"Salada de frutas","group_key":"fruits","name":"Uva","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-059","category":"Salada de frutas","group_key":"toppings","name":"Leite condensado","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-060","category":"Salada de frutas","group_key":"toppings","name":"Mel","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-061","category":"Salada de frutas","group_key":"toppings","name":"Leite em pó","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-062","category":"Salada de frutas","group_key":"toppings","name":"Granola","price_cents":0,"review":"Incluído no valor. Limite não informado."},{"code":"OP-063","category":"Fondue","group_key":"fruits","name":"Morango","price_cents":0,"review":"Escolhas listadas antes dos adicionais. Confirmar limites e porções."},{"code":"OP-064","category":"Fondue","group_key":"fruits","name":"Banana","price_cents":0,"review":"Escolhas listadas antes dos adicionais. Confirmar limites e porções."},{"code":"OP-065","category":"Fondue","group_key":"fruits","name":"Manga","price_cents":0,"review":"Escolhas listadas antes dos adicionais. Confirmar limites e porções."},{"code":"OP-066","category":"Fondue","group_key":"fruits","name":"Uva","price_cents":0,"review":"Escolhas listadas antes dos adicionais. Confirmar limites e porções."},{"code":"OP-067","category":"Fondue","group_key":"toppings","name":"Chocolate ao leite","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-068","category":"Fondue","group_key":"toppings","name":"Chocolate branco","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-069","category":"Fondue","group_key":"toppings","name":"Creme de avelã","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-070","category":"Fondue","group_key":"toppings","name":"Creme Cookies Cream","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-071","category":"Fondue","group_key":"toppings","name":"Marshmallow","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-072","category":"Fondue","group_key":"toppings","name":"Confete","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-073","category":"Fondue","group_key":"toppings","name":"Chocopower","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."},{"code":"OP-074","category":"Fondue","group_key":"toppings","name":"Brownie","price_cents":0,"review":"Sem acréscimo indicado. Confirmar limites e porções."}],"templates":[{"key":"received","title":"Pedido recebido","body":"Olá, {cliente}! Recebemos seu pedido #{pedido} na {loja}.\n\n{itens}\n\nTotal: {total}. Em breve iniciaremos o preparo!"},{"key":"preparing","title":"Em preparo","body":"Olá, {cliente}! Seu pedido #{pedido} da {loja} já está em preparo. Estamos cuidando de tudo!"},{"key":"ready","title":"Pedido pronto","body":"Olá, {cliente}! Seu pedido #{pedido} da {loja} está pronto. {orientacao}"},{"key":"out_for_delivery","title":"Saiu para entrega","body":"Olá, {cliente}! Seu pedido #{pedido} da {loja} saiu para entrega. Até já!"},{"key":"completed","title":"Agradecimento","body":"Olá, {cliente}! Obrigado por escolher a {loja}. Esperamos que tenha gostado do seu pedido #{pedido}!"},{"key":"contact","title":"Atendimento","body":"Olá, {cliente}! Aqui é da {loja}. Como podemos ajudar?"}]};
function normalizePhone(value) {
  if (/[a-z*#]/i.test(value)) throw new Error('Informe o telefone real com DDD.');
  let digits=String(value).replace(/\D/g,'');
  if (/^(0800|0300)/.test(digits)) throw new Error('Informe o celular real do cliente, sem localizador.');
  if ([10,11].includes(digits.length)) digits='55'+digits;
  if (!digits.startsWith('55') || ![12,13].includes(digits.length)) throw new Error('Telefone com DDD inválido.');
  const national=digits.slice(2);
  if(national[0]==='0'||new Set(national).size<3||!/[2-9]/.test(national[2])||(national.length===11&&national[2]!=='9')) throw new Error('Confira o DDD e o telefone.');
  return digits;
}
function parseContact(text) {
  const result={};
  const fields={nome:'name',cliente:'name','nome do cliente':'name',telefone:'phone',celular:'phone',whatsapp:'phone',endereco:'street',rua:'street',numero:'number',bairro:'neighborhood',cidade:'city',referencia:'reference',complemento:'reference'};
  for(const line of text.split(/\r?\n/)) {
    const match=line.match(/^\s*([^:]{2,30}):\s*(.+)\s*$/);
    if(match) {
      const label=match[1].normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
      if(fields[label]) result[fields[label]]=match[2].trim();
    }
  }
  if(!result.phone) {
    const found=[...text.matchAll(/(?:\+?55[ .-]*)?\(?[1-9]\d\)?[ .-]*9?\d{4}[ .-]*\d{4}/g)].map(m=>m[0]);
    const phones=[];
    for(const phone of found) {try{phones.push(normalizePhone(phone));}catch{}}
    const unique=[...new Set(phones)];
    if(unique.length===1) result.phone=unique[0];
  }
  if(result.phone) {try{result.phone=normalizePhone(result.phone);}catch{delete result.phone;}}
  if(result.street&&!result.number) {
    const address=result.street.match(/^(.+?),\s*(\d+[a-zA-Z]?)$/);
    if(address) {result.street=address[1];result.number=address[2];}
  }
  return result;
}
function toCents(value) {
  let raw=String(value??'').trim().replace(/R\$|\s/g,'');
  if(!raw) return 0;
  if(raw.includes(',')) raw=raw.replace(/\./g,'').replace(',','.');
  if(!/^\d+(\.\d{1,2})?$/.test(raw)) throw new Error('Informe o valor com até duas casas decimais.');
  const amount=Number(raw);
  if(!Number.isFinite(amount)||amount<0) throw new Error('Valor inválido.');
  return Math.round((amount+Number.EPSILON)*100);
}
function lineTotal(product,quantity,options,gross=0,tare=0,scaleAmount=null) {
  if(scaleAmount!==null){
    if(product.mode!=='weight'||quantity!==1||!Number.isSafeInteger(scaleAmount)||scaleAmount<=0||scaleAmount>10000000)throw new Error('Valor da balança inválido.');
    return scaleAmount+options.reduce((sum,o)=>sum+o.price_cents,0);
  }
  if(product.price_cents===null) throw new Error('Preço pendente de cadastro.');
  const base=product.mode==='weight'?Math.round(product.price_cents*(gross-tare)/1000):product.price_cents;
  return (base+options.reduce((sum,o)=>sum+o.price_cents,0))*quantity;
}
function whatsappLinks(phone,text){
  const number=normalizePhone(phone),encoded=encodeURIComponent(text);
  return {web:'#',app:'#'};
}
function makeRequestKey(){
  if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();
  const bytes=new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;
  const hex=[...bytes].map(value=>value.toString(16).padStart(2,'0')).join('');
  return [hex.slice(0,8),hex.slice(8,12),hex.slice(12,16),hex.slice(16,20),hex.slice(20)].join('-');
}

const KEY=window.SKYE_DEMO_CONFIG?.storageKey||'skye.demo.gestao-comercial.v1';
const copy=value=>JSON.parse(JSON.stringify(value));
const error=(message,status=422,details=null)=>{const err=new Error(message);err.status=status;err.details=details;throw err;};
const brl=value=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value/100);
const idFor=rows=>rows.reduce((max,row)=>Math.max(max,row.id||0),0)+1;
const positiveInt=(n,zero=false)=>Number.isInteger(n)&&n>=(zero?0:1);
const qty=value=>{const number=Number(value);if(!Number.isFinite(number)||number<0||number>10000000)error('Quantidade inválida.');return Math.round(number*1000);};
const dayOf=instant=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(instant));
const validDay=value=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(value)||!Number.isFinite(Date.parse(value+'T12:00:00Z')))error('Informe uma data válida.');return value;};

class DemoStore{
  constructor(seed,{storage=null,clock=()=>new Date(),key=KEY}={}){
    this.enabled=true;this.seed=copy(seed);this.storage=storage;this.key=key;this.clock=clock;this.testPhone='';
    try{this.state=JSON.parse(storage?.getItem(key)||'null');}catch{this.state=null;}
    if(!this.state||![3,4].includes(this.state.schema)||!this.state.settings?.store_name||!['orders','products','customers','options','groups','templates','ingredients','recipes','bills','settlements','movements','users','message_events'].every(key=>Array.isArray(this.state[key])))this.state=this.build();
    this.upgrade();this.persist();
  }
  upgrade(){
    const s=this.state;
    const base=s.groups.find(g=>g.category==="Monte seu copo"&&g.key==="base");
    if(base&&base.min_choices===0){base.min_choices=1;if(base.max_choices===0)base.max_choices=3;}
    for(const o of s.orders){
      const bill=s.bills.find(b=>b.order_id===o.id&&b.kind==='receivable');
      o.payments??=[{method:o.payment_method,amount_cents:o.total_cents,status:o.payment_status,received_cents:bill?.settled_cents||0}];
      for(const i of o.items){i.pricing_source??='catalog';i.scale_total_cents??=null;}
      o.stock_pending??=0;
    }
    const sorvete=this.seed.products.find(p=>p.code==='SORVETE-KG');
    if(sorvete&&!s.products.some(p=>p.code===sorvete.code))s.products.push({...copy(sorvete),id:idFor(s.products),price_cents:4990,active:1,review:'Preço por kg fictício da demonstração.'});
    s.schema=4;
  }
  now(){return new Date(this.clock()).toISOString();}
  day(offset=0){const day=dayOf(this.now());const date=new Date(day+'T12:00:00-03:00');date.setUTCDate(date.getUTCDate()+offset);return dayOf(date);}
  persist(){try{this.storage?.setItem(this.key,JSON.stringify(this.state));}catch{/* A sessão segue utilizável quando o navegador bloqueia armazenamento. */}}
  reset(){this.state=this.build();this.testPhone='';this.persist();return {ok:true};}
  build(){
    const s={schema:4,settings:{store_name:window.SKYE_DEMO_CONFIG?.companyName||'Operação Aurora',store_phone:'0000000000000',store_address:window.SKYE_DEMO_CONFIG?.address||'Avenida Exemplo, 120, Centro, Cidade Modelo/SP'},products:this.seed.products.map((p,index)=>({...p,id:index+1,active:1})),options:this.seed.options.map((o,index)=>({...o,id:index+1,active:1})),groups:this.seed.groups.map((g,index)=>({...g,id:index+1})),templates:copy(this.seed.templates),customers:[],orders:[],ingredients:[],recipes:[],movements:[],bills:[],settlements:[],message_events:[],users:[{id:1,name:'Administrador da demonstração',username:'admin.demo',role:'admin',active:1,must_change_password:0},{id:2,name:'Atendimento de exemplo',username:'atendimento.demo',role:'atendente',active:1,must_change_password:0},{id:3,name:'Produção de exemplo',username:'producao.demo',role:'producao',active:1,must_change_password:0}]};
    this.state=s;
    for(const weighted of s.products.filter(p=>p.mode==='weight')){weighted.price_cents=weighted.code==='SORVETE-KG'?4990:5990;weighted.review='Preço por kg fictício, usado apenas na demonstração.';}
    const names=['Ana','Bruno','Carla','Diego','Elisa','Fernando','Gabriela','Hugo'];
    names.forEach((name,index)=>s.customers.push({id:index+1,name:name+' (exemplo)',phone:'0090000000'+(index+1),street:'Rua Demonstração',number:String(10+index*7),neighborhood:index%2?'Jardim Exemplo':'Centro (exemplo)',city:window.SKYE_DEMO_CONFIG?.city||'Cidade Modelo',reference:'Endereço fictício para demonstração',notes:'Cadastro fictício.',created_at:this.now(),updated_at:this.now()}));
    const ingredients=[['Açaí tradicional','kg',18.5,5],['Creme de cupuaçu','kg',6.2,2],['Morango','kg',1.4,2],['Banana','kg',7.5,2],['Leite em pó','kg',3.2,1],['Nutella','kg',1.8,.5],['Granola','kg',2.6,1],['Copo 330 ml','un',128,50],['Copo 550 ml','un',42,50],['Leite condensado','kg',4.8,1]];
    ingredients.forEach(([name,unit,stock,min_stock],index)=>{
      const id=index+1;s.ingredients.push({id,name,unit,stock_milli:qty(stock),min_milli:qty(min_stock)});
      s.movements.push({id:idFor(s.movements),ingredient_id:id,delta_milli:qty(stock),reason:'Estoque inicial fictício',order_id:null,created_at:this.now(),user_id:1});
    });
    const recipe=(code,iid,quantity)=>{const p=s.products.find(p=>p.code===code);s.recipes.push({id:idFor(s.recipes),product_id:p.id,option_id:null,ingredient_id:iid,quantity_milli:qty(quantity)});};
    recipe('COM-CLA-330',1,.25);recipe('COM-CLA-330',4,.05);recipe('COM-CLA-330',5,.02);recipe('COM-CLA-330',10,.03);recipe('COM-CLA-330',8,1);
    recipe('COM-CLA-550',1,.4);recipe('COM-CLA-550',4,.08);recipe('COM-CLA-550',5,.03);recipe('COM-CLA-550',9,1);
    recipe('MCP-330',8,1);recipe('MCP-550',9,1);recipe('PESO-KG',1,1);
    const base=s.options.find(o=>o.category==='Monte seu copo'&&o.group_key==='base'&&o.name==='Açaí');
    s.recipes.push({id:idFor(s.recipes),product_id:null,option_id:base.id,ingredient_id:1,quantity_milli:qty(.25)});
    const nutella=s.options.find(o=>o.category==='Monte seu copo'&&o.name==='Nutella');
    s.recipes.push({id:idFor(s.recipes),product_id:null,option_id:nutella.id,ingredient_id:6,quantity_milli:qty(.03)});
    const find=code=>s.products.find(p=>p.code===code).id;
    const orderSeeds=[
      ['MCP-550',1,'received','whatsapp','entrega','pix','pending',1],
      ['COM-CLA-330',2,'received','balcao','retirada','dinheiro','paid',2],
      ['COM-SEN-550',3,'preparing','ifood_manual','entrega','ifood','platform',1],
      ['COM-NIN-330',4,'preparing','whatsapp','retirada','pix','paid',1],
      ['COM-CLA-550',5,'preparing','balcao','balcao','debito','paid',1],
      ['COM-MAR-550',6,'ready','uairango_manual','entrega','uairango','platform',2],
      ['MIL-OVO-550',7,'ready','telefone','retirada','pix','pending',1],
      ['COM-CLA-330',8,'out_for_delivery','whatsapp','entrega','pix','paid',2],
      ['SAL-440',1,'completed','balcao','balcao','credito','paid',1],
      ['VIT-TRO-500',2,'completed','balcao','retirada','dinheiro','paid',2],
      ['FON-MED',3,'completed','whatsapp','retirada','pix','paid',1],
      ['COM-FIT-550',4,'completed','balcao','balcao','pix','paid',1],
    ];
    const current=new Date(this.now());
    orderSeeds.forEach(([code,cid,status,channel,fulfillment,payment_method,payment_status,quantity],index)=>{
      const opts=code.startsWith('MCP')?[base.id,nutella.id]:[];
      const created=this.createOrder({request_key:'demo-example-'+String(index).padStart(4,'0'),customer_id:cid,channel,fulfillment,payment_method,payment_status,external_ref:channel==='ifood_manual'?'IF-EX123':channel==='uairango_manual'?'UR-EX456':'',delivery_cents:fulfillment==='entrega'?500:0,discount_cents:0,notes:index===0?'Separar os acompanhamentos. Pedido fictício.':'',...(index===8?{payments:[{method:'dinheiro',amount_cents:1000,status:'paid'},{method:'pix',amount_cents:1190,status:'paid'}]}:{}),items:[{product_id:find(code),quantity,options:opts}]});
      const raw=s.orders.find(o=>o.id===created.id);
      raw.created_at=new Date(current.getTime()-(index*4+3)*60000).toISOString();raw.updated_at=raw.created_at;
      if(status!=='received')this.applyStock(raw);
      raw.status=status;
      const bill=s.bills.find(b=>b.order_id===raw.id);bill.created_at=raw.created_at;
      if(payment_status==='platform')bill.due_date=this.day(2);
    });
    const bill=(description,partner,amount,offset,paid=false,kind='payable')=>{
      const b=this.addBill({kind,description,partner,amount_cents:amount,due_date:this.day(offset)});
      if(paid)this.settle(b.id,{amount_cents:amount,method:'Pix (exemplo)',note:'Liquidação fictícia.'});
    };
    bill('Compra de açaí — exemplo','Fornecedor Exemplo',148000,-2);
    bill('Energia da loja — exemplo','Energia Exemplo',28500,3);
    bill('Aluguel — exemplo','Locador Exemplo',185000,5);
    bill('Embalagens — exemplo','Embalagens Exemplo',31200,7);
    bill('Compra de leite em pó — exemplo','Fornecedor Exemplo',24500,-1,true);
    bill('Encomenda para evento — exemplo','Cliente Exemplo',29000,4,false,'receivable');
    return s;
  }
  customer(id){const c=this.state.customers.find(c=>c.id===Number(id));if(!c)error('Cliente não encontrado.',404);return c;}
  product(id){const p=this.state.products.find(p=>p.id===Number(id));if(!p)error('Produto não encontrado.',404);return p;}
  rawOrder(id){const o=this.state.orders.find(o=>o.id===Number(id));if(!o)error('Pedido não encontrado.',404);return o;}
  order(id){
    const o=this.rawOrder(id),bill=this.state.bills.find(b=>b.order_id===o.id&&b.kind==='receivable');
    const events=this.state.message_events.filter(e=>e.order_id===o.id);
    return {...copy(o),code:'PV'+String(o.id).padStart(4,'0'),operator:'Equipe de demonstração',bill:bill?{id:bill.id,state:bill.state,amount_cents:bill.amount_cents,settled_cents:bill.settled_cents}:null,stock_warnings:o.items.filter(i=>i.pricing_source==='scale_total'&&i.net_g===null).map(i=>i.name+': peso não registrado; sem baixa automática dos insumos por kg.'),last_whatsapp_opened:events.at(-1)?.created_at||null};
  }
  saveCustomer(data,id=null){
    if(!data.name||data.name.trim().length<2)error('Informe o nome do cliente.');
    const phone=normalizePhone(data.phone||'');
    const duplicate=this.state.customers.find(c=>c.phone===phone&&c.id!==Number(id));
    if(duplicate)error('Já existe cliente com este telefone.',409,{customer_id:duplicate.id,name:duplicate.name});
    const values={name:data.name.trim(),phone,street:data.street||'',number:data.number||'',neighborhood:data.neighborhood||'',city:data.city||window.SKYE_DEMO_CONFIG?.city||'Cidade Modelo',reference:data.reference||'',notes:data.notes||'',updated_at:this.now()};
    if(id)Object.assign(this.customer(id),values);else{const c={...values,id:idFor(this.state.customers),created_at:this.now()};this.state.customers.push(c);id=c.id;}
    return {id:Number(id),phone};
  }
  pricedItem(item,index){
    const p=this.product(item.product_id),scaleAmount=item.scale_total_cents??null;if(!p.active||p.price_cents===null&&scaleAmount===null)error('Produto indisponível ou com preço pendente.');
    const quantity=Number(item.quantity??1);if(!positiveInt(quantity)||quantity>100)error('Quantidade inválida.');
    const selected=item.options||[];if(new Set(selected).size!==selected.length)error('Uma opção foi selecionada duas vezes.');
    const options=selected.map(id=>{const o=this.state.options.find(o=>o.id===Number(id));if(!o||!o.active||o.category!==p.category)error('Opção incompatível com o produto.');return copy(o);});
    for(const g of this.state.groups.filter(g=>g.category===p.category)){
      const n=options.filter(o=>o.group_key===g.key).length;
      if(n<g.min_choices)error('Escolha ao menos '+g.min_choices+' em '+g.title+'.');
      if(g.max_choices!==null&&n>g.max_choices)error('Escolha no máximo '+g.max_choices+' em '+g.title+'.');
    }
    const gross=Number(item.gross_g??0),tare=Number(item.tare_g??0);
    if(p.mode==='weight'&&(!positiveInt(tare,true)||quantity!==1||gross>100000||tare>100000||(gross?(!positiveInt(gross)||gross<=tare):tare>0)||scaleAmount===null&&gross<=tare))error('Informe peso bruto maior que a tara, para uma pesagem.');
    if(p.mode!=='weight'&&(gross||tare||scaleAmount!==null))error('Este produto é vendido por tamanho, sem pesagem.');
    const total=lineTotal(p,quantity,options,gross,tare,scaleAmount);
    return {id:index+1,product_id:p.id,name:p.name+(p.size_ml?' '+p.size_ml+' ml':''),quantity,gross_g:p.mode==='weight'&&gross>tare?gross:null,tare_g:p.mode==='weight'&&gross>tare?tare:null,net_g:p.mode==='weight'&&gross>tare?gross-tare:null,pricing_source:scaleAmount!==null?'scale_total':'catalog',scale_total_cents:scaleAmount,unit_cents:total/quantity,total_cents:total,options,notes:item.notes||''};
  }
  createOrder(data){
    const previous=this.state.orders.find(o=>o.request_key===data.request_key);if(previous)return this.order(previous.id);
    if(!data.request_key||!data.items?.length)error('Adicione os itens do pedido.');
    const customer=data.customer_id?this.customer(data.customer_id):null;
    const fulfillment=data.fulfillment||'balcao';
    if(fulfillment==='entrega'&&(!customer||!customer.street||!customer.number))error('Complete o cliente e o endereço para a entrega.');
    const payment_method=data.payment_method||'pix',payment_status=data.payment_status||'pending';
    const items=data.items.map((item,index)=>this.pricedItem(item,index)),subtotal=items.reduce((sum,i)=>sum+i.total_cents,0),discount=data.discount_cents||0,delivery=data.delivery_cents||0;
    if(!positiveInt(discount,true)||!positiveInt(delivery,true)||discount>subtotal)error('Confira os valores de desconto e entrega.');
    const total=subtotal-discount+delivery;if(total<=0)error('O valor do pedido deve ser maior que zero.');
    const payments=this.paymentPlan(data,total),summary=this.paymentSummary(payments);
    const order={id:idFor(this.state.orders),request_key:data.request_key,customer_id:customer?.id||null,customer_name:customer?.name||'',customer_phone:customer?.phone||'',address:customer?[customer.street,customer.number,customer.neighborhood,customer.city,customer.reference].filter(Boolean).join(', '):'',status:'received',channel:data.channel||'balcao',fulfillment,payment_method:summary.method,payment_status:summary.status,payments,external_ref:data.external_ref||'',notes:data.notes||'',subtotal_cents:subtotal,discount_cents:discount,delivery_cents:delivery,total_cents:total,created_at:this.now(),updated_at:this.now(),created_by:1,stock_applied:0,stock_pending:0,items};
    this.state.orders.push(order);
    const bill=this.addBill({kind:'receivable',description:'Pedido PV'+String(order.id).padStart(4,'0'),partner:{ifood:'iFood (exemplo)',uairango:'Uai Rango (exemplo)'}[payment_method]||customer?.name||'Balcão',amount_cents:total,due_date:this.day(),order_id:order.id});
    for(const part of payments.filter(p=>p.status==='paid'))this.settle(bill.id,{amount_cents:part.amount_cents,method:part.method,note:'Recebimento de demonstração.'});
    return this.order(order.id);
  }
  paymentPlan(data,total){
    const parts=copy(data.payments??[{method:data.payment_method||'pix',amount_cents:total,status:data.payment_status||'pending'}]);
    if(!parts.length||parts.length>20||parts.some(p=>!positiveInt(p.amount_cents)||!['pix','dinheiro','credito','debito','ifood','uairango','a_receber'].includes(p.method)||!['paid','pending','platform'].includes(p.status)))error('Confira as formas e valores do pagamento.');
    if(parts.reduce((n,p)=>n+p.amount_cents,0)!==total)error('A soma dos pagamentos deve ser igual ao total do pedido.');
    for(const p of parts){if(p.status==='platform'&&!['ifood','uairango'].includes(p.method))error('Pagamento na plataforma exige iFood ou Uai Rango.');if(p.method==='a_receber'&&p.status!=='pending')error('Selecione o meio utilizado para receber.');p.received_cents=0;}
    return parts;
  }
  paymentSummary(parts){
    const received=parts.reduce((n,p)=>n+p.received_cents,0),total=parts.reduce((n,p)=>n+p.amount_cents,0);
    return {method:parts.length===1?parts[0].method:'multiplo',status:parts.every(p=>p.status==='platform')?'platform':received===total?'paid':received?'partial':'pending'};
  }
  applyStock(order){
    if(order.stock_applied)return;
    const use=new Map();
    for(const item of order.items){
      const missingWeight=item.pricing_source==='scale_total'&&item.net_g===null;
      const productRecipes=this.state.recipes.filter(r=>r.product_id===item.product_id);if(missingWeight&&productRecipes.length)order.stock_pending=1;
      for(const r of missingWeight?[]:productRecipes)use.set(r.ingredient_id,(use.get(r.ingredient_id)||0)+r.quantity_milli*item.quantity*(item.net_g===null?1:item.net_g/1000));
      for(const o of item.options)for(const r of this.state.recipes.filter(r=>r.option_id===o.id))use.set(r.ingredient_id,(use.get(r.ingredient_id)||0)+r.quantity_milli*item.quantity);
    }
    for(const [iid,raw]of use){const i=this.state.ingredients.find(i=>i.id===iid);if(i.stock_milli<Math.round(raw))error('Estoque insuficiente de '+i.name+'.',409);}
    for(const [iid,raw]of use){const delta=-Math.round(raw);this.state.ingredients.find(i=>i.id===iid).stock_milli+=delta;this.state.movements.push({id:idFor(this.state.movements),ingredient_id:iid,delta_milli:delta,reason:'Consumo do pedido fictício',order_id:order.id,created_at:this.now(),user_id:1});}
    order.stock_applied=1;
  }
  setStatus(id,data){
    const o=this.rawOrder(id);if(o.status===data.status)return this.order(o.id);
    const transitions={received:['preparing','completed','cancelled'],preparing:['ready','completed','cancelled'],ready:['out_for_delivery','completed','cancelled'],out_for_delivery:['completed','cancelled'],completed:['cancelled'],cancelled:[]};
    if(!transitions[o.status]?.includes(data.status))error('Mudança de etapa indisponível.',409);
    if(data.status==='out_for_delivery'&&o.fulfillment!=='entrega')error('Este pedido não é para entrega.');
    if(data.status==='cancelled'){
      if(!data.reason||data.reason.trim().length<3)error('Informe o motivo do cancelamento.');
      if(data.restore_stock){
        const totals=new Map();for(const m of this.state.movements.filter(m=>m.order_id===o.id))totals.set(m.ingredient_id,(totals.get(m.ingredient_id)||0)+m.delta_milli);
        for(const [iid,delta]of totals)if(delta<0){this.state.ingredients.find(i=>i.id===iid).stock_milli-=delta;this.state.movements.push({id:idFor(this.state.movements),ingredient_id:iid,delta_milli:-delta,reason:'Devolução por cancelamento fictício',order_id:o.id,created_at:this.now(),user_id:1});}
      }
      const bill=this.state.bills.find(b=>b.order_id===o.id&&b.kind==='receivable');
      if(bill){bill.state='void';if(bill.settled_cents)this.addBill({kind:'payable',description:'Estorno do pedido PV'+String(o.id).padStart(4,'0'),partner:o.customer_name||'Balcão',amount_cents:bill.settled_cents,due_date:this.day(),order_id:o.id});}
    }else this.applyStock(o);
    o.status=data.status;o.updated_at=this.now();return this.order(o.id);
  }
  addBill(data){
    if(!positiveInt(Number(data.amount_cents)))error('Informe um valor maior que zero.');
    validDay(data.due_date);
    const bill={id:idFor(this.state.bills),kind:data.kind,description:data.description,partner:data.partner,amount_cents:Number(data.amount_cents),settled_cents:0,state:'open',due_date:data.due_date,order_id:data.order_id||null,created_at:this.now()};
    this.state.bills.push(bill);return bill;
  }
  settle(id,data){
    const bill=this.state.bills.find(b=>b.id===Number(id));if(!bill||bill.state==='void')error('Conta não encontrada ou cancelada.',404);
    if(!positiveInt(data.amount_cents)||data.amount_cents>bill.amount_cents-bill.settled_cents)error('O valor excede o saldo da conta.');
    bill.settled_cents+=data.amount_cents;bill.state=bill.settled_cents===bill.amount_cents?'paid':'open';
    this.state.settlements.push({id:idFor(this.state.settlements),bill_id:bill.id,amount_cents:data.amount_cents,method:data.method,note:data.note||'',created_at:this.now(),user_id:1,operator:'Administrador da demonstração'});
    if(bill.kind==='receivable'&&bill.order_id){
      const o=this.rawOrder(bill.order_id),parts=[...o.payments].sort((a,b)=>Number(b.method===data.method)-Number(a.method===data.method));let left=data.amount_cents;
      for(const p of parts){const value=Math.min(left,p.amount_cents-p.received_cents);p.received_cents+=value;left-=value;if(p.status!=='platform')p.status=p.received_cents===p.amount_cents?'paid':'pending';}
      if(left)error('Pagamentos não correspondem ao saldo.');const summary=this.paymentSummary(o.payments);o.payment_method=summary.method;o.payment_status=summary.status;
    }
    return {ok:true};
  }
  message(data){
    const customer=this.customer(data.customer_id),order=data.order_id?this.order(data.order_id):null;
    if(order&&order.customer_id!==customer.id)error('Confira o destinatário: o pedido pertence a outro cliente.');
    const t=this.state.templates.find(t=>t.key===data.template_key);if(!t)error('Modelo de mensagem não encontrado.',404);
    if(!order&&t.key!=='contact')error('Selecione um pedido para esta mensagem.');
    const values={cliente:customer.name,pedido:order?.code||'',loja:this.state.settings.store_name,itens:order?.items.map(i=>i.quantity+'x '+i.name).join('\n')||'',total:order?brl(order.total_cents):'',orientacao:order?.fulfillment==='entrega'?'Estamos organizando a entrega.':order?.fulfillment==='retirada'?'Pode vir retirar seu pedido.':'Pode retirar no balcão.'};
    const text=data.text||t.body.replace(/\{(cliente|pedido|itens|total|loja|orientacao)\}/g,(_,key)=>values[key]);
    if(data.record_open)this.state.message_events.push({id:idFor(this.state.message_events),customer_id:customer.id,order_id:order?.id||null,created_at:this.now(),template_key:t.key,user_id:1}); return {name:customer.name,phone:customer.phone,text,url:'#',app_url:'#',requires_phone:false,local_only:true};
  }
  async request(path,options={}){
    const before=options.method&&options.method!=='GET'?copy(this.state):null;
    try{
      const result=this.route(path,options.method||'GET',options.body||{});
      if(before)this.persist();
      return copy(result);
    }catch(err){if(before)this.state=before;throw err;}
  }
  route(path,method,data){
    const u=new URL(path,'https://demo.local'),p=u.pathname,s=this.state,q=u.searchParams;
    if(p==='/api/profile')return {name:s.settings.store_name,credit:'Desenvolvido por Skye Gestão e Inovação',version:'1.0.0-demo',configured:true,demo:true,managed:true,database_kind:'Armazenamento local do navegador'};
    if(p==='/api/me')return {...s.users[0],csrf:'demo-browser-only',must_change_password:0};
    if(p==='/api/login')return {user:{...s.users[0],must_change_password:0},csrf:'demo-browser-only'};
    if(p==='/api/logout'||p==='/api/password')return {ok:true};
    if(p==='/api/catalog')return {products:s.products.map(p=>({...p,recipe_count:s.recipes.filter(r=>r.product_id===p.id).length})),groups:s.groups,options:s.options};
    if(p==='/api/customers'&&method==='GET'){
      const term=(q.get('q')||'').toLowerCase(),digits=term.replace(/\D/g,'');
      return s.customers.filter(c=>c.name.toLowerCase().includes(term)||(digits&&c.phone.includes(digits))).map(c=>({...c,order_count:s.orders.filter(o=>o.customer_id===c.id).length,last_whatsapp_opened:s.message_events.filter(m=>m.customer_id===c.id).at(-1)?.created_at||null})).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
    }
    if(p==='/api/customers'&&method==='POST')return this.saveCustomer(data);
    let m;
    if((m=p.match(/^\/api\/customers\/(\d+)$/))&&method==='PUT')return this.saveCustomer(data,m[1]);
    if(p==='/api/products'&&method==='POST'){const product={...data,id:idFor(s.products),code:'DEMO-'+idFor(s.products),active:data.active?1:0,review:''};s.products.push(product);return {id:product.id};}
    if((m=p.match(/^\/api\/products\/(\d+)$/))&&method==='PUT'){Object.assign(this.product(m[1]),data,{active:data.active?1:0});return {ok:true};}
    if((m=p.match(/^\/api\/options\/(\d+)$/))&&method==='PUT'){const o=s.options.find(o=>o.id===Number(m[1]));if(!o)error('Opção não encontrada.',404);Object.assign(o,data,{active:data.active?1:0});return {ok:true};}
    if((m=p.match(/^\/api\/groups\/(\d+)$/))&&method==='PUT'){const g=s.groups.find(g=>g.id===Number(m[1]));if(!g)error('Grupo não encontrado.',404);if(data.max_choices!==null&&data.min_choices>data.max_choices)error('O mínimo não pode exceder o máximo.');if(g.category==='Monte seu copo'&&g.key==='base'&&data.min_choices<1)error('Monte seu copo exige pelo menos uma base.');Object.assign(g,data);return {ok:true};}
    if(p==='/api/orders'&&method==='POST')return this.createOrder(data);
    if(p==='/api/orders'&&method==='GET'){
      const term=(q.get('q')||'').toLowerCase(),number=term.replace(/^#?\s*pv\s*/i,'').replace(/^0+/,'');
      return s.orders.filter(o=>(!q.get('customer_id')||o.customer_id===Number(q.get('customer_id')))&&(!q.get('status')||(q.get('status')==='active'?!['completed','cancelled'].includes(o.status):q.get('status')==='history'?['completed','cancelled'].includes(o.status):o.status===q.get('status')))&&(!q.get('channel')||o.channel===q.get('channel'))&&(!q.get('day')||dayOf(o.created_at)===q.get('day'))&&(!term||o.customer_name.toLowerCase().includes(term)||o.external_ref.toLowerCase().includes(term)||String(o.id)===number)).sort((a,b)=>b.id-a.id).slice(0,200).map(o=>this.order(o.id));
    }
    if((m=p.match(/^\/api\/orders\/(\d+)$/))&&method==='GET')return this.order(m[1]);
    if((m=p.match(/^\/api\/orders\/(\d+)\/status$/))&&method==='POST')return this.setStatus(m[1],data);
    if(p==='/api/summary')return {counts:Object.fromEntries(['received','preparing','ready','out_for_delivery','completed','cancelled'].map(status=>[status,s.orders.filter(o=>o.status===status).length])),today_count:s.orders.filter(o=>dayOf(o.created_at)===this.day()&&o.status!=='cancelled').length,today_sales_cents:s.orders.filter(o=>dayOf(o.created_at)===this.day()&&o.status!=='cancelled').reduce((sum,o)=>sum+o.total_cents,0),low_stock:s.ingredients.filter(i=>i.stock_milli<=i.min_milli).length};
    if(p==='/api/ingredients'&&method==='GET')return s.ingredients.map(i=>({...i,stock:i.stock_milli/1000,min_stock:i.min_milli/1000})).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
    if(p==='/api/ingredients'&&method==='POST'){
      if(s.ingredients.some(i=>i.name.toLowerCase()===data.name.toLowerCase()))error('Ingrediente já cadastrado.',409);
      const i={id:idFor(s.ingredients),name:data.name,unit:data.unit,stock_milli:qty(data.stock),min_milli:qty(data.min_stock)};s.ingredients.push(i);if(i.stock_milli)s.movements.push({id:idFor(s.movements),ingredient_id:i.id,delta_milli:i.stock_milli,reason:'Estoque inicial de teste',created_at:this.now(),user_id:1,order_id:null});return {id:i.id};
    }
    if(p==='/api/stock/movements')return s.movements.map(m=>({...m,name:s.ingredients.find(i=>i.id===m.ingredient_id)?.name,unit:s.ingredients.find(i=>i.id===m.ingredient_id)?.unit,operator:'Equipe de demonstração'})).sort((a,b)=>b.id-a.id).slice(0,150);
    if(p==='/api/stock'&&method==='POST'){
      const i=s.ingredients.find(i=>i.id===data.ingredient_id);if(!i)error('Ingrediente não encontrado.',404);
      const amount=qty(data.quantity),delta=data.kind==='inventario'?amount-i.stock_milli:data.kind==='entrada'?amount:-amount;
      if(i.stock_milli+delta<0)error('A saída excede o estoque disponível.',409);if(data.kind!=='inventario'&&amount===0)error('Informe uma quantidade maior que zero.');
      if(data.create_payable){if(data.kind!=='entrada'||!data.supplier)error('Informe a entrada e o fornecedor.');this.addBill({kind:'payable',description:'Compra de '+i.name,partner:data.supplier,amount_cents:data.amount_cents,due_date:data.due_date});}
      i.stock_milli+=delta;const label={entrada:'entrada',perda:'perda',inventario:'inventário',vitrine:'abastecimento da vitrine'}[data.kind]||data.kind;s.movements.push({id:idFor(s.movements),ingredient_id:i.id,delta_milli:delta,reason:label+': '+data.reason,order_id:null,created_at:this.now(),user_id:1});return {ok:true};
    }
    if(p==='/api/recipes'&&method==='GET')return s.recipes.map(r=>{const i=s.ingredients.find(i=>i.id===r.ingredient_id),p=s.products.find(p=>p.id===r.product_id),o=s.options.find(o=>o.id===r.option_id);return {...r,ingredient:i?.name,unit:i?.unit,product:p?.name||null,size_ml:p?.size_ml||null,option_name:o?.name||null};});
    if(p==='/api/recipes'&&method==='POST'){
      if(Boolean(data.product_id)===Boolean(data.option_id))error('Selecione um produto ou uma opção.');
      if(!s.ingredients.some(i=>i.id===data.ingredient_id))error('Ingrediente não encontrado.');
      const amount=qty(data.quantity);if(amount<=0)error('Informe uma quantidade maior que zero.');
      s.recipes=s.recipes.filter(r=>!(r.product_id===data.product_id&&r.option_id===data.option_id&&r.ingredient_id===data.ingredient_id));const r={...data,id:idFor(s.recipes),quantity_milli:amount};delete r.quantity;s.recipes.push(r);return {id:r.id};
    }
    if((m=p.match(/^\/api\/recipes\/(\d+)$/))&&method==='DELETE'){s.recipes=s.recipes.filter(r=>r.id!==Number(m[1]));return {ok:true};}
    if(p==='/api/finance/sales'&&method==='GET'){
      const start=q.get('start'),end=q.get('end'),channel=q.get('channel'),payment=q.get('payment');
      if(!start||!end||start>end)error('Informe um período válido.');
      return s.orders.filter(o=>{
        const day=dayOf(o.created_at);
        return o.status!=='cancelled'&&day>=start&&day<=end&&(!channel||o.channel===channel)&&(!payment||o.payments.some(part=>part.method===payment));
      }).sort((a,b)=>b.created_at.localeCompare(a.created_at)||b.id-a.id).map(({id,created_at,channel,total_cents})=>({id,created_at,channel,total_cents}));
    }
    if(p==='/api/finance'&&method==='GET')return s.bills.map(b=>({...b,remaining_cents:b.amount_cents-b.settled_cents})).sort((a,b)=>a.due_date.localeCompare(b.due_date)||a.id-b.id);
    if(p==='/api/finance'&&method==='POST')return {id:this.addBill(data).id};
    if((m=p.match(/^\/api\/finance\/(\d+)\/settle$/))&&method==='POST')return this.settle(m[1],data);
    if((m=p.match(/^\/api\/finance\/(\d+)\/settlements$/)))return s.settlements.filter(x=>x.bill_id===Number(m[1])).sort((a,b)=>b.id-a.id);
    if(p==='/api/templates')return s.templates;
    if((m=p.match(/^\/api\/templates\/([^/]+)$/))&&method==='PUT'){
      const t=s.templates.find(t=>t.key===m[1]);if(!t)error('Modelo não encontrado.',404);if(!data.body||data.body.length<5)error('Informe o texto da mensagem.');
      if([...data.body.matchAll(/\{([^{}]+)\}/g)].some(m=>!['cliente','pedido','itens','total','loja','orientacao'].includes(m[1])))error('A mensagem contém um campo desconhecido.');t.body=data.body;return {ok:true};
    }
    if(p==='/api/messages/prepare'&&method==='POST')return this.message(data);
    if(p==='/api/settings'&&method==='GET')return s.settings;
    if(p==='/api/settings'&&method==='PUT'){Object.assign(s.settings,data);return {ok:true};}
    if(p==='/api/users'&&method==='GET')return {users:s.users,can_create_admin:false};
    if(p==='/api/users'&&method==='POST'){
      if(s.users.some(u=>u.username===data.username))error('Usuário já cadastrado.',409);const u={id:idFor(s.users),name:data.name,username:data.username,role:data.role,active:1,must_change_password:0};s.users.push(u);return {id:u.id};
    }
    if((m=p.match(/^\/api\/users\/(\d+)\/disable$/))&&method==='POST'){if(Number(m[1])===1)error('Mantenha o administrador da demonstração ativo.');const u=s.users.find(u=>u.id===Number(m[1]));if(u)u.active=0;return {ok:true};}
    if(p==='/api/technical')return {version:'1.0.0-demo',active_users:s.users.filter(u=>u.active).length,admin_exists:true,database:'Demonstração local',financial_access:false};
    if(p==='/api/integrations')return [
      {name:'WhatsApp',state:'manual',title:'Simulação de mensagem ao cliente',description:'Gere e revise uma mensagem fictícia. A demonstração não envia dados nem abre serviços externos.'},
      {name:'Balança',state:'pending',title:'Venda por peso ou valor da balança',description:'Digite os gramas e a tara ou o valor em reais mostrado na balança. Os preços por kg e as porções são fictícios. A conexão automática depende do modelo.'},
      {name:'iFood',state:'pending',title:'Canal demonstrativo',description:'As origens dos pedidos são exemplos. A demonstração não recebe nem altera pedidos de plataformas externas.'},
      {name:'Uai Rango',state:'pending',title:'Canal demonstrativo',description:'A integração é apresentada apenas como possibilidade; nenhuma sincronização é executada.'},
    ];
    error('Recurso indisponível na demonstração.',404);
  }
}

window.SkyeDemo=new DemoStore(DEMO_SEED,{storage:(()=>{try{return window.localStorage}catch{return null}})()});
const $=(q,base=document)=>base.querySelector(q);
const $$=(q,base=document)=>[...base.querySelectorAll(q)];
const e=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cash=value=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format((value||0)/100);
const decimal=value=>String((value||0)/100).replace('.',',');
const amount=value=>new Intl.NumberFormat('pt-BR',{maximumFractionDigits:3}).format(value);
const stamp=(value,short=false)=>value?new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit',...(short?{}:{year:'numeric'}),hour:'2-digit',minute:'2-digit'}).format(new Date(value)):'—';
const dateLabel=value=>value?new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo'}).format(new Date(value+'T12:00:00-03:00')):'—';
const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const phoneLabel=value=>{const n=String(value||'').replace(/\D/g,'').replace(/^55/,'');return n.length>=10?`(${n.slice(0,2)}) ${n.slice(2,-4)}-${n.slice(-4)}`:value||'Sem telefone';};
const initials=name=>(name||'SK').split(/\s+/).slice(0,2).map(n=>n[0]).join('').toUpperCase();
const statusLabels={received:'Recebido',preparing:'Em preparo',ready:'Pronto',out_for_delivery:'Saiu para entrega',completed:'Concluído',cancelled:'Cancelado'};
const channelLabels={balcao:'Balcão',whatsapp:'WhatsApp',telefone:'Telefone',ifood_manual:'iFood · manual',uairango_manual:'Uai Rango · manual'};
const fulfillmentLabels={balcao:'Consumo no local',retirada:'Retirada',entrega:'Entrega'};
const roleLabels={developer:'Desenvolvedor',admin:'Administrador',atendente:'Atendimento',producao:'Produção'};
const feedbackTypes={ERROR:'Erro',SUGGESTION:'Sugestão',USABILITY:'Dificuldade de uso',INCORRECT_INFO:'Informação incorreta'};
const feedbackStatuses={OPEN:'Aberto',REVIEWING:'Em análise',RESOLVED:'Resolvido'};
const trialLabels={pending:'Aguardando primeiro login',running:'Teste em andamento',expired:'Teste encerrado',standard:'Acesso permanente'};
const paymentLabels={pix:'Pix',dinheiro:'Dinheiro',credito:'Cartão de crédito',debito:'Cartão de débito',ifood:'iFood',uairango:'Uai Rango',a_receber:'A receber'};
const icons={
 orders:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h4"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 customers:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M21 21v-3a6 6 0 0 0-3-5"/>',
 cup:'<path d="M5 8h14l-2 13H7L5 8ZM4 8h16M8 4h8M13 8l2-7"/>',
 stock:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5ZM3 8l9 5 9-5M12 13v9M7 5l10 6"/>',
 wallet:'<path d="M3 7a3 3 0 0 1 3-3h13v4M3 7v12a2 2 0 0 0 2 2h16V8H6a3 3 0 0 1-3-1Z"/><path d="M21 12h-6v5h6M17 14.5h1"/>',
 message:'<path d="M21 11.5A9 9 0 0 1 8 20L3 21l1-5A9 9 0 1 1 21 11.5Z"/><path d="M8 8h8M8 12h6"/>',
 settings:'<path d="M5 4v16M12 4v16M19 4v16M2 8h6M9 16h6M16 10h6"/>',
 shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
 logout:'<path d="M9 3H4v18h5M8 12h13m-4-4 4 4-4 4"/>',
 arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
 refresh:'<path d="M20 7v5h-5M4 17v-5h5M5 7a8 8 0 0 1 13-3l2 3M4 17l2 3a8 8 0 0 0 13-3"/>',
 search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
 print:'<path d="M6 9V3h12v6M6 18H3v-8h18v8h-3M6 14h12v7H6zM17 11h1"/>',
 menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 edit:'<path d="m15 4 5 5M3 21l5-1L21 7l-5-5L3 15v6Z"/>',
 trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',
 scale:'<path d="M12 3v18M5 21h14M3 7h18M5 7l-4 8h8L5 7ZM19 7l-4 8h8l-4-8Z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 link:'<path d="m10 14 4-4M8 16l-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 8l2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 0) scale(.9)"/>',
};
const icon=name=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.orders}</svg>`;
const option=(value,label,selected)=>`<option value="${e(value)}"${String(value)===String(selected)?' selected':''}>${e(label)}</option>`;
const badge=(label,key='')=>`<span class="badge ${e(key)}">${e(label)}</span>`;
const action=(name,label,id='',style='',ico='')=>`<button type="button" class="btn ${style}" data-action="${name}" data-id="${e(id)}">${ico?icon(ico):''}${label}</button>`;
const heading=(title,description,buttons='')=>`<div class="page-heading"><div><h1>${e(title)}</h1><p>${e(description)}</p></div><div class="page-actions">${buttons}</div></div>`;
const empty=(title,description,button='',ico='orders')=>`<div class="empty"><div class="empty-illustration">${icon(ico)}</div><h2>${e(title)}</h2><p>${e(description)}</p>${button}</div>`;
const newDraft=()=>({customer_id:'',channel:'balcao',fulfillment:'balcao',external_ref:'',delivery:'',discount:'',payment_method:'pix',payment_status:'pending',payments:null,notes:''});
const S={profile:{name:'Operação Aurora'},user:null,csrf:'',page:'orders',catalog:null,customers:[],orders:[],cart:[],draft:newDraft(),requestKey:makeRequestKey(),category:'Monte seu copo',productSearch:'',orderFilters:{status:'active',q:'',channel:'',day:''},financeKind:'payable',financeState:'open',financeMonth:today().slice(0,7),financeDay:'',catalogTab:'products',catalogSearch:'',recentProduct:null,salesFilters:{start:today().slice(0,7)+'-01',end:today(),channel:'',payment:''},stockTab:'ingredients',customerSearch:'',message:null,renderId:0};
Object.assign(S,{activityFilters:{user_id:'',kind:'all',start:'',end:''},activityOffset:0,feedbackFilters:{status:'OPEN',type:'ALL',user_id:''},feedbackOffset:0,feedbackDismissed:false});
let toastTimer;
function toast(message,bad=false){const box=$('#toast');box.textContent=message;box.className='show'+(bad?' bad':'');clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.className='',bad?6500:3500);}
function clearSessionState(){S.user=null;S.csrf='';S.cart=[];S.draft=newDraft();S.requestKey=makeRequestKey();S.catalog=null;S.customers=[];S.orders=[];S.users=[];S.feedbackItems=[];S.trialUsers=[];S.message=null;}
async function api(path,options={}) { if(!window.SkyeDemo?.enabled)throw new Error('Motor local indisponível.'); return window.SkyeDemo.request(path,options); }
function closeModal(){const modal=$('#modal');if(modal.open)modal.close();modal.innerHTML='';modal.className='';}
function showModal(title,subtitle,body,actions='',wide=false){const modal=$('#modal');if(modal.open)modal.close();modal.className=wide?'wide':'';modal.innerHTML=`<div class="modal-head"><div><h2 id="modal-title">${e(title)}</h2>${subtitle?`<p>${e(subtitle)}</p>`:''}</div>${canSendFeedback()?'<button type="button" class="quick-link" data-action="send-feedback">Enviar feedback</button>':''}<button type="button" class="modal-close" data-action="close-modal" aria-label="Fechar">×</button></div><div class="modal-body">${body}</div>${actions?`<div class="modal-actions">${actions}</div>`:''}`;modal.showModal();}
const formError=()=>'<p class="error" data-error role="alert"></p>';
const submitButton=(label,form)=>`<button class="btn primary" type="submit"${form?` form="${form}"`:''}>${e(label)}</button>`;
function setFormError(form,message){const box=$('[data-error]',form)||$('#modal [data-error]');if(box)box.textContent=message;else toast(message,true);}
function field(label,name,value='',extra='',type='text'){return `<label class="field">${e(label)}<input type="${type}" name="${name}" value="${e(value)}" ${extra}></label>`;}
function passwordForm(forced=false){return `<form id="password-form" data-form="password" class="stack">${forced?'<p class="notice">Defina sua senha pessoal para concluir o primeiro acesso.</p>':''}${field('Senha atual','current_password','','required autocomplete="current-password" maxlength="128"','password')}${field('Nova senha','new_password','','required minlength="12" maxlength="128" autocomplete="new-password"','password')}${field('Repita a nova senha','confirmation','','required minlength="12" maxlength="128" autocomplete="new-password"','password')}<p class="password-note">Use pelo menos 12 caracteres. A senha fica protegida e não é exibida para o desenvolvedor.</p>${formError()}${submitButton('Salvar nova senha')}</form>`;}
function renderLogin(){
  closeFeedback();
  $('#root').innerHTML=`<div class="login-layout"><section class="login-brand">${S.profile.managed?'':'<img src="/static/logo.png" alt="Identidade da demonstração">'}<div class="leaf-mark"></div><h1>${e(S.profile.name||'Operação Aurora')}</h1><p>Pedidos, clientes e gestão em um só lugar.</p><div class="login-credit">Desenvolvido por<br><strong>Skye Gestão e Inovação</strong></div></section><section class="login-form-area"><div class="login-panel">${S.profile.managed?'':'<img class="login-logo-mobile" src="/static/logo.png" alt="Operação Aurora">'}<div class="eyebrow muted">BEM-VINDO DE VOLTA</div><h2 class="topspace">Acesse sua loja</h2><p class="muted small">Entre para acompanhar os pedidos e cuidar do atendimento.</p><form data-form="login">${field('Usuário ou e-mail','username','','required autocomplete="username" maxlength="120"')}${field('Senha','password','','required autocomplete="current-password" maxlength="128"','password')}${formError()}${submitButton('Entrar no sistema')}</form><button type="button" class="quick-link topspace" data-action="login-help">Esqueci meu acesso</button>${S.profile.configured===false?'<p class="notice topspace">O acesso inicial ainda não foi configurado. Consulte o guia de instalação que acompanha o projeto.</p>':''}</div></section></div>`;
}
function navItems(){
  const all=[['orders','Pedidos','orders','Atendimento'],['new-order','Novo pedido','plus',''],['customers','Clientes','customers',''],['catalog','Cardápio','cup','Gestão'],['stock','Estoque e fichas','stock',''],['finance','Contas a pagar e receber','wallet',''],['sales','Relatório de vendas','orders',''],['messages','Mensagens prontas','message','Configurações'],['users','Usuários e acessos','shield',''],['integrations','Integrações','link',''],['settings','Dados da loja','settings','']];
  if(S.user.role==='developer')return [['technical','Visão técnica','shield','Skye'],['users','Usuários e acessos','customers',''],['activity','Acompanhamento de uso','clock','Testes e melhorias'],['feedback','Feedbacks recebidos','message',''],['notices','Avisos','message',''],['integrations','Integrações','link','']];
  if(S.user.role==='producao')return [all[0]];
  if(S.user.role==='admin'&&!window.SkyeDemo?.enabled)all.push(['notices','Avisos','message','']);
  return all.filter(x=>S.user.role==='admin'||!['stock','finance','sales','users','settings'].includes(x[0]));
}
function renderShell(){
  $('#root').innerHTML=`<aside class="sidebar"><div class="brand">${S.profile.managed?'':'<img src="/static/logo.png" alt="Logo da loja">'}<div><strong>${e(S.profile.name)}</strong><small>${window.SkyeDemo?.enabled?'DEMONSTRAÇÃO':e(window.SKYE_DEMO_CONFIG?.businessLabel||'GESTÃO COMERCIAL')}</small></div></div><nav aria-label="Navegação principal">${navItems().map(([page,title,ico,group])=>`${group?`<div class="nav-caption">${e(group)}</div>`:''}<button type="button" class="nav-item${S.page===page?' active':''}" data-action="navigate" data-page="${page}">${icon(ico)}${e(title)}</button>`).join('')}${S.user.role==='developer'?`<a class="nav-item" href="/demo/">${icon('cup')}Demonstração</a>`:''}</nav><div class="sidebar-footer"><div class="user-row"><div class="avatar">${e(initials(S.user.name))}</div><div class="user-text"><strong>${e(S.user.name)}</strong><small>${roleLabels[S.user.role]}</small></div>${window.SkyeDemo?.enabled?'':`<button class="btn ghost btn-icon" data-action="logout" aria-label="Sair">${icon('logout')}</button>`}</div>${window.SkyeDemo?.enabled?`<button class="quick-link topspace" data-action="demo-reset" style="color:#d7eac6">Restaurar exemplos</button>`:`<button class="quick-link topspace" data-action="change-password" style="color:#c3aad2">Trocar minha senha</button>`}${canSendFeedback()?'<button class="quick-link topspace feedback-footer" data-action="send-feedback">Enviar feedback</button>':''}<p>Desenvolvido por<br><strong>Skye Gestão e Inovação</strong></p></div></aside><div class="workspace">${trialBanner()}<div id="skye-billing-reminders"></div><div id="app-notice-banner"></div>${window.SkyeDemo?.enabled?`<div class="demo-banner"><div><strong>Demonstração comercial SKYE</strong><span>Dados fictícios · uso local · nenhuma conexão externa</span></div><button type="button" data-action="demo-reset">${icon('refresh')} Restaurar exemplos</button></div>`:''}<header class="app-header"><div class="row"><button class="btn ghost btn-icon mobile-menu" data-action="toggle-menu" aria-label="Abrir menu">${icon('menu')}</button><div class="breadcrumbs">${e(S.profile.name)} <span aria-hidden="true"> / </span><strong id="breadcrumb">Pedidos</strong></div></div><div class="date-chip">${icon('calendar')}${e(new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',weekday:'long',day:'numeric',month:'long'}).format(new Date()))}</div></header><main class="content" id="content"></main></div>${feedbackDock()}`;
}
async function afterLogin(){
  if(S.user.must_change_password){$('#root').innerHTML=`${trialBanner()}<div class="login-form-area" style="min-height:100vh"><div class="login-panel"><img src="/static/logo.png" width="85" alt="Operação Aurora"><h2 class="topspace">Crie sua senha pessoal</h2>${passwordForm(true)}<button class="btn ghost topspace" data-action="logout">Sair</button></div></div>`;return;}
  S.page=S.user.role==='developer'?'technical':'orders';renderShell();void loadSkyeBillingReminders();void loadNoticeBanner();await go(S.page);
}
async function loadSkyeBillingReminders(){
  if(S.user?.role!=='admin'||window.SkyeDemo?.enabled)return;
  const region=$('#skye-billing-reminders');
  try{
    const {reminders}=await api('/api/skye-billing/reminders');
    if(!region?.isConnected)return;
    region.innerHTML=reminders.map(bill=>`<div class="trial-banner" role="status"><div>
      <strong>${bill.overdue?'Mensalidade Skye em atraso':'Lembrete de mensalidade Skye'}</strong>
      <span>${e(cash(bill.amount_cents))} · Vencimento: ${e(bill.due_date.split('-').reverse().join('/'))}</span>
      ${bill.pix_key?`<span class="skye-pix-key">Pague pelo Pix usando a chave <strong>${e(bill.pix_key)}</strong></span><button type="button" class="btn ghost" data-action="copy-skye-pix" data-pix="${e(bill.pix_key)}">Copiar chave Pix</button>`:''}
    </div><p>Se já pagou, aguarde a confirmação da equipe Skye.</p></div>`).join('');
  }catch{/* O painel da loja continua disponível quando o lembrete não pode ser consultado. */}
}
async function ensureCatalog(){if(!S.catalog)S.catalog=await api('/api/catalog');return S.catalog;}
async function go(page){
  if(!navItems().some(x=>x[0]===page))return;
  S.page=page;$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));$('.sidebar')?.classList.remove('open');
  $('#breadcrumb').textContent=navItems().find(x=>x[0]===page)[1];document.title=`${$('#breadcrumb').textContent} | ${S.profile.name}`;
  const id=++S.renderId;$('#content').innerHTML='<div class="page-loading"><span class="spinner"></span><p class="topspace">Carregando…</p></div>';
  try{
    const views={'orders':renderOrders,'new-order':renderNewOrder,'customers':renderCustomers,'catalog':renderCatalog,'stock':renderStock,'finance':renderFinance,'sales':renderSales,'messages':renderTemplates,'users':renderUsers,'integrations':renderIntegrations,'settings':renderSettings,'technical':renderTechnical,'activity':renderActivity,'feedback':renderFeedbackInbox,'notices':renderNotices};
    const html=await views[page]();if(id===S.renderId){$('#content').innerHTML=html;if(S.user&&S.user.role!=='developer'&&!window.SkyeDemo?.enabled)api('/api/activity/page',{method:'POST',body:{page}}).catch(()=>{});}
  }catch(err){if(S.user&&id===S.renderId)$('#content').innerHTML=empty('Não foi possível carregar',err.message,action('refresh','Tentar novamente','','primary','refresh'));}
}
function nextStatus(order){if(S.user.role==='producao')return order.status==='received'?'preparing':order.status==='preparing'?'ready':null;return {received:'preparing',preparing:'ready',ready:order.fulfillment==='entrega'?'out_for_delivery':'completed',out_for_delivery:'completed'}[order.status]||null;}
function nextLabel(status){return {preparing:'Iniciar preparo',ready:'Marcar pronto',out_for_delivery:'Saiu para entrega',completed:'Concluir pedido'}[status];}
function orderCard(order){
  const next=nextStatus(order);
  return `<article class="order-card"><div class="order-top"><button class="order-code" data-action="order-detail" data-id="${order.id}">#${e(order.code)}</button><span class="order-time">${e(stamp(order.created_at,true))}</span></div><div class="order-name">${e(order.customer_name||'Consumidor do balcão')}</div><div class="order-meta">${e(channelLabels[order.channel])} · ${e(fulfillmentLabels[order.fulfillment])}</div><div class="order-items">${order.items.slice(0,3).map(i=>`${i.quantity}× ${e(i.name)}`).join('<br>')}${order.items.length>3?`<br>+ ${order.items.length-3} itens`:''}</div><div class="order-foot row between"><span class="order-total">${order.total_cents!==undefined?cash(order.total_cents):`${order.items.reduce((sum,i)=>sum+i.quantity,0)} itens`}</span>${badge(statusLabels[order.status],order.status)}</div><div class="order-actions">${next?`<button class="btn primary" data-action="order-next" data-id="${order.id}" data-status="${next}">${e(nextLabel(next))}</button>`:action('order-detail','Ver pedido',order.id,'')}${order.customer_id&&S.user.role!=='producao'?action('order-message','Avisar',order.id,'whatsapp','message'):''}</div></article>`;
}
async function renderOrders(){
  const [summary,orders]=await Promise.all([api('/api/summary'),api('/api/orders?'+new URLSearchParams(S.orderFilters))]);S.orders=orders;
  const f=S.orderFilters,admin=S.user.role==='admin';
  const stats=`<div class="stats"><div class="stat"><div class="stat-label">Pedidos hoje</div><div class="stat-value">${summary.today_count}</div><small>Pedidos registrados, exceto cancelados</small></div><div class="stat"><div class="stat-label">Em preparo</div><div class="stat-value">${summary.counts.preparing||0}</div><small>Na cozinha neste momento</small></div><div class="stat"><div class="stat-label">${admin?'Vendas de hoje':'Prontos para sair'}</div><div class="stat-value">${admin?cash(summary.today_sales_cents):summary.counts.ready||0}</div><small>${admin?'Valor dos pedidos, antes dos repasses':'Aguardando retirada ou entrega'}</small></div></div>`;
  const filters=`<form class="filterbar" data-form="orders-filter"><label class="field wide-search">Buscar pedido ou cliente<input name="q" value="${e(f.q)}" placeholder="Nome, número ou referência"></label><label class="field">Situação<select name="status">${[['active','Em andamento'],['history','Histórico'],['','Todos'],...Object.entries(statusLabels)].map(([v,l])=>option(v,l,f.status)).join('')}</select></label><label class="field">Origem<select name="channel">${option('','Todas',f.channel)}${Object.entries(channelLabels).map(([v,l])=>option(v,l,f.channel)).join('')}</select></label><label class="field">Data<input type="date" name="day" value="${e(f.day)}"></label>${submitButton('Filtrar')}</form>`;
  const tabs='<div class="tabs">'+[['active','Em andamento'],['history','Histórico']].map(([key,label])=>`<button class="tab ${(key==='active'?['active','received','preparing','ready','out_for_delivery']:['history','completed','cancelled']).includes(f.status)?'active':''}" data-action="orders-tab" data-status="${key}">${label}</button>`).join('')+'</div>';
  let body;
  if(!orders.length&&(f.q||f.day||f.channel||f.customer_id||f.status!=='active'))body=empty('Nenhum pedido encontrado','Confira os filtros de busca.');
  else if(!orders.length)body=empty('Tudo pronto para receber pedidos','Cadastre o pedido, acompanhe o preparo e mantenha o cliente informado.',S.user.role!=='producao'?action('navigate-new','Novo pedido','','primary','plus'):'','orders');
  else if(f.status==='active')body=`<div class="board">${['received','preparing','ready','out_for_delivery'].map(status=>`<section class="board-column"><div class="column-heading"><span>${e(statusLabels[status])}</span><span class="count">${orders.filter(o=>o.status===status).length}</span></div>${orders.filter(o=>o.status===status).map(orderCard).join('')||'<div class="column-empty">Nenhum pedido nesta etapa</div>'}</section>`).join('')}</div>`;
  else body=`<div class="order-history">${orders.map(orderCard).join('')}</div>`;
  return heading('Pedidos','Acompanhe cada pedido, do recebimento à entrega.',action('refresh','Atualizar','','','refresh')+(S.user.role!=='producao'?action('navigate-new','Novo pedido','','primary','plus'):''))+stats+tabs+filters+'<p class="note-line">A busca respeita a situação, a origem e a data selecionadas.</p>'+body+(orders.length===200?'<p class="note-line">Exibindo os 200 pedidos mais recentes. Use os filtros para localizar os demais.</p>':'');
}
function cartTotal(){let total=S.cart.reduce((sum,i)=>sum+i.total_cents,0);try{total+=toCents(S.draft.delivery)-toCents(S.draft.discount);}catch{}return total;}
const receivedLabels={pending:'A receber',paid:'Recebido pela loja',platform:'Pago na plataforma'};
function paymentFields(){
  const d=S.draft;
  if(!d.payments)return `<div class="form-grid"><label class="field">Forma de pagamento<select data-draft="payment_method">${Object.entries(paymentLabels).map(([v,l])=>option(v,l,d.payment_method)).join('')}</select></label><label class="field">Recebimento<select data-draft="payment_status">${Object.entries(receivedLabels).map(([v,l])=>option(v,l,d.payment_status)).join('')}</select></label></div><button type="button" class="quick-link" data-action="split-payment">${icon('plus')} Dividir entre formas de pagamento</button>${d.payment_status==='platform'?'<p class="note-line" style="margin:0">O repasse ficará em contas a receber até a confirmação da loja.</p>':''}`;
  return `<div class="split-payments"><div class="row between"><strong class="small">Pagamento dividido</strong><button type="button" class="quick-link" data-action="single-payment">Usar uma forma</button></div>${d.payments.map((part,index)=>`<div class="payment-part"><div class="row between"><strong class="small">Parte ${index+1}</strong>${d.payments.length>1?`<button type="button" class="quick-link" data-action="remove-payment" data-id="${index}">Remover</button>`:''}</div><div class="form-grid"><label class="field">Forma da parte ${index+1}<select data-payment="method" data-index="${index}">${Object.entries(paymentLabels).map(([v,l])=>option(v,l,part.method)).join('')}</select></label><label class="field">Valor da parte ${index+1} (R$)<input data-payment="amount" data-index="${index}" inputmode="decimal" value="${e(part.amount)}" placeholder="0,00"></label></div><label class="field">Recebimento da parte ${index+1}<select data-payment="status" data-index="${index}">${Object.entries(receivedLabels).map(([v,l])=>option(v,l,part.status)).join('')}</select></label></div>`).join('')}<div id="payment-balance" role="status" aria-live="polite">${paymentBalance()}</div><button type="button" class="quick-link" data-action="add-payment"${d.payments.length>=20?' disabled':''}>${icon('plus')} Adicionar forma de pagamento</button></div>`;
}
function paymentBalance(){
  try{const sum=S.draft.payments.reduce((n,p)=>n+toCents(p.amount),0),diff=cartTotal()-sum;return diff===0?'Valores conferidos · '+cash(sum):diff>0?'Falta distribuir '+cash(diff):'Pagamentos excedem o pedido em '+cash(-diff);}catch{return 'Confira os valores das partes.';}
}
function paymentDetails(order){
  if(order.total_cents===undefined)return '';
  const parts=order.payments||[{method:order.payment_method,amount_cents:order.total_cents,status:order.payment_status,received_cents:order.bill?.settled_cents||0}];
  return `<div class="payment-detail"><h3 class="small">${parts.length>1?'Pagamento dividido':'Pagamento'}</h3>${parts.map(p=>`<div class="row between small"><span>${e(paymentLabels[p.method]||p.method)}<small class="muted"> · ${p.received_cents===p.amount_cents?'Recebido':p.status==='platform'?'Repasse pendente':p.received_cents?'Recebido parcialmente':'A receber'}</small></span><strong>${cash(p.amount_cents)}</strong></div>`).join('')}</div>`;
}

function renderCart(){
  const d=S.draft;
  return `<div class="panel cart-panel"><div class="panel-head"><h2>Pedido atual</h2>${badge(S.cart.length+' '+(S.cart.length===1?'item':'itens'))}</div><div class="cart-lines">${S.cart.length?S.cart.map((item,index)=>`<div class="cart-line"><div class="cart-line-head"><strong>${item.quantity}× ${e(item.name)}</strong><span class="cart-price">${cash(item.total_cents)}</span></div><small>${e(item.options.map(o=>o.name).join(', '))}${item.net_g?`Peso líquido: ${item.net_g} g`:item.scale_total_cents!=null?'Valor da balança · peso não informado':''}${item.notes?` · ${e(item.notes)}`:''}</small><button class="cart-remove" data-action="remove-cart" data-id="${index}">Remover item</button></div>`).join(''):'<div class="cart-empty">Escolha um produto para começar.</div>'}</div><div class="cart-fields"><label class="field">Cliente<select data-draft="customer_id"><option value="">Consumidor do balcão</option>${S.customers.map(c=>option(c.id,c.name+' · '+phoneLabel(c.phone),d.customer_id)).join('')}</select></label><button class="quick-link" data-action="quick-customer">${icon('plus')} Cadastrar cliente rapidamente</button><div class="form-grid"><label class="field">Origem<select data-draft="channel">${Object.entries(channelLabels).map(([v,l])=>option(v,l,d.channel)).join('')}</select></label><label class="field">Atendimento<select data-draft="fulfillment">${Object.entries(fulfillmentLabels).map(([v,l])=>option(v,l,d.fulfillment)).join('')}</select></label></div>${d.channel.endsWith('_manual')?`<label class="field">Número no aplicativo (opcional)<input data-draft="external_ref" value="${e(d.external_ref)}" maxlength="100"></label>`:''}${paymentFields()}<div class="form-grid"><label class="field">Desconto (R$)<input data-draft="discount" inputmode="decimal" value="${e(d.discount)}" placeholder="0,00"></label><label class="field">Entrega (R$)<input data-draft="delivery" inputmode="decimal" value="${e(d.delivery)}" placeholder="0,00"></label></div><label class="field">Observações do pedido<textarea data-draft="notes" rows="2" maxlength="1000" placeholder="Informações para o preparo ou entrega">${e(d.notes)}</textarea></label></div><div class="cart-total"><span>Total do pedido</span><strong id="cart-total-value">${cash(cartTotal())}</strong></div><p class="error" id="checkout-error" role="alert"></p><button class="btn primary block" data-action="checkout"${!S.cart.length?' disabled':''}>${icon('check')} Registrar pedido</button></div>`;
}
function productsHTML(){
  const products=S.catalog.products.filter(p=>p.active&&(!S.category||p.category===S.category)&&(!S.productSearch||(p.name+' '+p.category+' '+(p.size_ml||'')).toLowerCase().includes(S.productSearch.toLowerCase())));
  return products.length?`<div class="product-grid">${products.map(p=>`<button class="product-card" data-action="add-product" data-id="${p.id}"${p.price_cents===null&&p.mode!=='weight'?' disabled':''}><div class="product-art">${icon(p.mode==='weight'?'scale':'cup')}<span class="product-size">${p.size_ml?`${p.size_ml} ML`:p.mode==='weight'?'POR KG':'MÉDIO'}</span></div><div class="product-body"><span class="product-category">${e(p.category)}</span><span class="product-name">${e(p.name)}</span><span class="product-price">${p.price_cents===null?(p.mode==='weight'?'Informar valor da balança':'Preço a definir'):cash(p.price_cents)+(p.mode==='weight'?' / kg':'')}${p.price_cents!==null?'<span class="add-circle">+</span>':''}</span></div></button>`).join('')}</div>`:empty('Nenhum produto encontrado','Escolha outra categoria ou altere a busca.','','cup');
}
async function renderNewOrder(){
  await ensureCatalog();S.customers=await api('/api/customers');
  const categories=[...new Set(S.catalog.products.filter(p=>p.active).map(p=>p.category))];
  return heading('Novo pedido','Escolha os produtos e monte o pedido do seu cliente.',action('navigate-orders','Voltar aos pedidos','','','orders'))+`<div class="pos-layout"><section><div class="catalog-toolbar"><input class="search-input" id="product-search" aria-label="Buscar produto" placeholder="Buscar no cardápio…" value="${e(S.productSearch)}"></div><div class="category-tabs">${['',...categories].map(cat=>`<button class="category-tab ${S.category===cat?'active':''}" data-action="category" data-category="${e(cat)}">${e(cat||'Todos')}</button>`).join('')}</div><div id="product-results">${productsHTML()}</div></section><section id="cart-container">${renderCart()}</section></div>`;
}
async function renderCustomers(){
  S.customers=await api('/api/customers?q='+encodeURIComponent(S.customerSearch));
  return heading('Clientes','Cadastros rápidos, telefones e contato direto pelo WhatsApp.',action('new-customer','Novo cliente','','primary','plus'))+`<form class="filterbar" data-form="customers-filter"><label class="field wide-search">Buscar cliente<input name="q" placeholder="Nome ou telefone" value="${e(S.customerSearch)}"></label>${submitButton('Buscar')}</form>`+(S.customers.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Cliente</th><th>Telefone</th><th>Bairro / cidade</th><th>Pedidos</th><th></th></tr></thead><tbody>${S.customers.map(c=>`<tr><td><div class="customer-cell"><div class="avatar">${e(initials(c.name))}</div><div><strong>${e(c.name)}</strong>${c.last_whatsapp_opened?`<small>WhatsApp aberto em ${e(stamp(c.last_whatsapp_opened))}</small>`:''}</div></div></td><td>${e(phoneLabel(c.phone))}</td><td>${e([c.neighborhood,c.city].filter(Boolean).join(' · '))}</td><td>${c.order_count}</td><td><div class="actions">${action('customer-message','WhatsApp',c.id,'small whatsapp','message')}${action('edit-customer','Editar',c.id,'small','edit')}${action('customer-orders','Pedidos',c.id,'small','orders')}</div></td></tr>`).join('')}</tbody></table></div><div class="table-footer">${S.customers.length} clientes encontrados</div></div>`:empty('Seu atendimento começa pelo nome','Cadastre nome e telefone. O endereço pode ser preenchido no próprio pedido de entrega.',action('new-customer','Cadastrar primeiro cliente','','primary','plus'),'customers'));
}

async function renderCatalog(){
  S.catalog=await api('/api/catalog');const admin=S.user.role==='admin';
  const tabs=`<div class="tabs">${[['products','Produtos e tamanhos'],['options','Bases e adicionais'],['groups','Regras de montagem']].map(([key,label])=>`<button class="tab ${S.catalogTab===key?'active':''}" data-action="catalog-tab" data-tab="${key}">${label}</button>`).join('')}</div>`;
  let body='';
  const search=S.catalogSearch.trim().toLocaleLowerCase('pt-BR');
  const products=S.catalog.products.filter(p=>[p.name,p.code].some(value=>String(value||'').toLocaleLowerCase('pt-BR').includes(search)));
  const recent=S.catalog.products.find(p=>p.id===S.recentProduct);
  const productTools=`<form class="filterbar" data-form="catalog-filter"><label class="field wide-search">Buscar produto<input name="q" value="${e(S.catalogSearch)}" placeholder="Nome ou código"></label>${submitButton('Buscar')}${search?action('catalog-clear','Limpar busca'):''}</form>${admin&&recent?`<div class="notice space">Produto cadastrado: ${e(recent.name)} ${action('edit-product','Editar produto cadastrado',recent.id,'small','edit')}</div>`:''}`;
  if(S.catalogTab==='products'&&!products.length)body=productTools+empty('Nenhum produto encontrado','Busque por nome ou código.');
  else if(S.catalogTab==='products')body=productTools+`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Tamanho</th><th class="num">Preço</th><th>Situação</th>${admin?'<th>Vínculo Uai Rango</th><th></th>':''}</tr></thead><tbody>${products.map(p=>`<tr><td><strong>${e(p.name)}</strong><small>${e(p.code)}</small></td><td>${e(p.category)}</td><td>${p.size_ml?`${p.size_ml} ml`:p.mode==='weight'?'Por kg':'Médio'}</td><td class="num">${p.price_cents===null?badge('Preço pendente','pending'):cash(p.price_cents)+(p.mode==='weight'?'/kg':'')}</td><td>${badge(p.active?'Ativo':'Inativo',p.active?'ready':'inactive')}</td>${admin?`<td><small>Teste: ${e(p.uairango_sandbox_id||'pendente')}<br>Oficial: ${e(p.uairango_production_id||'pendente')}</small></td><td>${action('edit-product','Editar',p.id,'small','edit')}</td>`:''}</tr>`).join('')}</tbody></table></div></div>`;
  if(S.catalogTab==='options')body=`${admin?'<p class="notice space">Ouro Branco e Bis Branco têm preços diferentes entre copo e fondue nas fotos. Os valores foram mantidos por categoria para conferência.</p>':''}<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Opção</th><th>Categoria</th><th>Grupo</th><th class="num">Acréscimo</th>${admin?'<th>Vínculo Uai Rango</th><th></th>':''}</tr></thead><tbody>${S.catalog.options.map(o=>`<tr><td><strong>${e(o.name)}</strong>${!o.active?badge('Inativo','inactive'):''}</td><td>${e(o.category)}</td><td>${e(S.catalog.groups.find(g=>g.category===o.category&&g.key===o.group_key)?.title||o.group_key)}</td><td class="num">${o.price_cents?cash(o.price_cents):'Incluído'}</td>${admin?`<td><small>Teste: ${e(o.uairango_sandbox_id||'pendente')}<br>Oficial: ${e(o.uairango_production_id||'pendente')}</small></td><td>${action('edit-option','Editar',o.id,'small','edit')}</td>`:''}</tr>`).join('')}</tbody></table></div></div>`;
  if(S.catalogTab==='groups')body=`<p class="note-line space">O copo exige pelo menos uma base. Os limites de cada grupo aparecem abaixo. Limites não informados no cardápio estão em aberto e podem ser ajustados pelo administrador.</p><div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Categoria</th><th>Grupo</th><th>Mínimo</th><th>Máximo</th>${admin?'<th></th>':''}</tr></thead><tbody>${S.catalog.groups.map(g=>`<tr><td>${e(g.category)}</td><td><strong>${e(g.title)}</strong></td><td>${g.min_choices}</td><td>${g.max_choices??'Não definido'}</td>${admin?`<td>${action('edit-group','Editar',g.id,'small','settings')}</td>`:''}</tr>`).join('')}</tbody></table></div></div>`;
  return heading('Cardápio','Produtos e valores cadastrados a partir das fotos da loja.',admin?action('new-product','Novo produto','','primary','plus'):'')+tabs+body;
}
async function renderStock(){
  const [ingredients,recipes,movements]=await Promise.all([api('/api/ingredients'),api('/api/recipes'),api('/api/stock/movements')]);await ensureCatalog();S.ingredients=ingredients;S.recipes=recipes;
  const tabs=`<div class="tabs">${[['ingredients','Ingredientes e embalagens'],['recipes','Fichas técnicas'],['movements','Movimentações']].map(([key,label])=>`<button class="tab ${S.stockTab===key?'active':''}" data-action="stock-tab" data-tab="${key}">${label}</button>`).join('')}</div>`;
  let body='';
  if(S.stockTab==='ingredients')body=`<p class="notice space">Venda por peso: ao colocar um pote na vitrine, registre o abastecimento pelo peso ou quantidade transferida. Essa baixa acontece uma vez, antes das vendas. Não configure ficha técnica de consumo para o mesmo pote; assim os pedidos não descontam o estoque novamente.</p>`+(ingredients.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Ingrediente / embalagem</th><th class="num">Disponível</th><th class="num">Mínimo</th><th>Situação</th><th></th></tr></thead><tbody>${ingredients.map(i=>`<tr><td><strong>${e(i.name)}</strong></td><td class="num">${amount(i.stock)} ${e(i.unit)}</td><td class="num">${amount(i.min_stock)} ${e(i.unit)}</td><td>${i.stock<=i.min_stock?badge('Repor estoque','pending'):badge('Disponível','ready')}</td><td>${action('stock-move','Movimentar',i.id,'small','stock')}</td></tr>`).join('')}</tbody></table></div></div>`:empty('Controle os ingredientes e as embalagens','Cadastre o estoque real e as porções das fichas técnicas para dar baixa conforme o preparo dos pedidos.',action('new-ingredient','Cadastrar ingrediente','','primary','plus'),'stock'));
  if(S.stockTab==='recipes')body=`<p class="notice space">Informe as porções reais de cada produto e opção. A baixa acontece ao iniciar o preparo. Produtos sem ficha podem ser vendidos, mas seus ingredientes não são baixados automaticamente. Volume em ml não é convertido em peso.</p>${recipes.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Produto ou opção</th><th>Ingrediente</th><th class="num">Consumo por unidade</th><th></th></tr></thead><tbody>${recipes.map(r=>`<tr><td><strong>${e(r.product||r.option_name)}</strong><small>${r.product_id?(r.size_ml?r.size_ml+' ml':S.catalog.products.find(p=>p.id===r.product_id)?.mode==='weight'?'Consumo por 1 kg vendido':'Por unidade'):'Por seleção da opção'}</small></td><td>${e(r.ingredient)}</td><td class="num">${amount(r.quantity_milli/1000)} ${e(r.unit)}</td><td>${action('delete-recipe','Remover',r.id,'small danger','trash')}</td></tr>`).join('')}</tbody></table></div></div>`:empty('Configure as primeiras fichas técnicas','Vincule os ingredientes e as quantidades consumidas por cada tamanho, combinação ou adicional.',action('new-recipe','Adicionar ingrediente à ficha','','primary','plus'),'cup')}`;
  if(S.stockTab==='movements')body=movements.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Data</th><th>Ingrediente</th><th class="num">Movimento</th><th>Motivo</th><th>Responsável</th></tr></thead><tbody>${movements.map(m=>`<tr><td>${e(stamp(m.created_at))}</td><td>${e(m.name)}</td><td class="num">${m.delta_milli>0?'+':''}${amount(m.delta_milli/1000)} ${e(m.unit)}</td><td>${e(m.reason)}${m.order_id?`<small>Pedido PV${String(m.order_id).padStart(4,'0')}</small>`:''}</td><td>${e(m.operator)}</td></tr>`).join('')}</tbody></table></div></div>`:empty('Nenhuma movimentação registrada','Entradas, perdas, ajustes e consumo dos pedidos aparecerão aqui.','','stock');
  const buttons=action('new-recipe','Ficha técnica','','','cup')+action('new-ingredient','Novo ingrediente','','primary','plus');
  return heading('Estoque e fichas técnicas','Ingredientes, embalagens e consumo na produção.',buttons)+tabs+body;
}
async function renderSales(){
  const f=S.salesFilters;
  const filters=`<form class="filterbar" data-form="sales-filter"><label class="field">De<input type="date" name="start" value="${e(f.start)}" required></label><label class="field">Até<input type="date" name="end" min="${e(f.start)}" value="${e(f.end)}" required></label><label class="field">Origem<select name="channel">${option('','Todas',f.channel)}${Object.entries(channelLabels).map(([key,label])=>option(key,label,f.channel)).join('')}</select></label><label class="field">Forma de pagamento<select name="payment">${option('','Todas',f.payment)}${Object.entries(paymentLabels).map(([key,label])=>option(key,label,f.payment)).join('')}</select></label>${submitButton('Filtrar')}</form>`;
  const header=heading('Relatório de vendas','Consulte pedidos registrados no período, exceto cancelados.')+filters;
  if(f.start>f.end)return header+'<p class="notice">A data inicial deve ser anterior ou igual à final.</p>';
  const sales=await api('/api/finance/sales?'+new URLSearchParams(f));
  if(!sales.length)return header+empty('Nenhuma venda encontrada','Confira o período e os filtros.');
  const total=sales.reduce((sum,sale)=>sum+sale.total_cents,0);
  return header+`<p class="note-line">${sales.length} pedido(s) · Valor total: ${cash(total)}. Pedidos com pagamento dividido entram pelo valor integral quando usam a forma selecionada.</p><div class="panel table-wrap"><table class="data-table"><thead><tr><th>Pedido</th><th>Data</th><th>Origem</th><th class="num">Valor</th></tr></thead><tbody>${sales.map(sale=>`<tr><td>${action('order-detail','#PV'+String(sale.id).padStart(4,'0'),sale.id,'small')}</td><td>${stamp(sale.created_at)}</td><td>${e(channelLabels[sale.channel]||sale.channel)}</td><td class="num">${cash(sale.total_cents)}</td></tr>`).join('')}</tbody></table></div>`;
}

async function renderFinance(){
  const bills=await api('/api/finance');S.bills=bills;
  const all=bills.filter(b=>b.kind===S.financeKind),open=all.filter(b=>b.state==='open');
  const displayed=all.filter(b=>(!S.financeState||b.state===S.financeState)&&(!S.financeDay||b.due_date===S.financeDay));
  const total=open.reduce((sum,b)=>sum+b.remaining_cents,0),overdue=open.filter(b=>b.due_date<today()).reduce((sum,b)=>sum+b.remaining_cents,0),paid=all.filter(b=>b.state==='paid').reduce((sum,b)=>sum+b.settled_cents,0);
  const tabs=`<div class="tabs">${[['payable','Contas a pagar'],['receivable','Contas a receber']].map(([key,label])=>`<button class="tab ${S.financeKind===key?'active':''}" data-action="finance-kind" data-kind="${key}">${label}</button>`).join('')}</div>`;
  const stats=`<div class="stats"><div class="stat"><div class="stat-label">Em aberto</div><div class="stat-value">${cash(total)}</div><small>Saldo a ${S.financeKind==='payable'?'pagar':'receber'}</small></div><div class="stat"><div class="stat-label">Vencidas</div><div class="stat-value">${cash(overdue)}</div><small>Vencimento anterior a hoje</small></div><div class="stat"><div class="stat-label">Quitadas</div><div class="stat-value">${cash(paid)}</div><small>Contas integralmente liquidadas</small></div></div>`;
  const [year,month]=S.financeMonth.split('-').map(Number),first=new Date(year,month-1,1,12),days=new Date(year,month,0).getDate(),offset=(first.getDay()+6)%7;
  const monthLabel=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(first);
  const calendar=`<section class="panel finance-calendar"><div class="panel-head"><h2>Calendário financeiro</h2><div class="row"><button class="btn small" data-action="finance-month" data-delta="-1" aria-label="Mês anterior">‹</button><strong class="calendar-month">${e(monthLabel)}</strong><button class="btn small" data-action="finance-month" data-delta="1" aria-label="Próximo mês">›</button><button class="btn small" data-action="finance-today">Hoje</button></div></div><div class="calendar-grid calendar-weekdays">${['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d=>`<span>${d}</span>`).join('')}</div><div class="calendar-grid">${Array.from({length:offset},()=>'<span class="calendar-blank"></span>').join('')+Array.from({length:days},(_,idx)=>{const day=String(idx+1).padStart(2,'0'),key=`${S.financeMonth}-${day}`,items=bills.filter(b=>b.due_date===key&&b.state!=='void'),pay=items.filter(b=>b.kind==='payable'&&b.state==='open').reduce((n,b)=>n+b.remaining_cents,0),receive=items.filter(b=>b.kind==='receivable'&&b.state==='open').reduce((n,b)=>n+b.remaining_cents,0);return `<button class="calendar-day ${S.financeDay===key?'selected':''} ${key===today()?'is-today':''}" data-action="calendar-day" data-day="${key}"><span class="calendar-number">${idx+1}</span>${pay?`<small class="calendar-pay">↓ ${cash(pay)}</small>`:''}${receive?`<small class="calendar-receive">↑ ${cash(receive)}</small>`:''}${items.length&&!pay&&!receive?'<small class="calendar-paid">Quitada</small>':''}</button>`;}).join('')}</div><div class="calendar-legend"><span><i class="calendar-pay-dot"></i>A pagar</span><span><i class="calendar-receive-dot"></i>A receber</span>${S.financeDay?`<button class="btn ghost small" data-action="finance-clear-day">Limpar dia · ${dateLabel(S.financeDay)}</button>`:''}</div></section>`;
  const filters=`<div class="category-tabs">${[['open','Em aberto'],['paid','Quitadas'],['void','Canceladas'],['','Todas']].map(([v,l])=>`<button class="category-tab ${S.financeState===v?'active':''}" data-action="finance-state" data-state="${v}">${l}</button>`).join('')}</div>`;
  const body=displayed.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Descrição</th><th>${S.financeKind==='payable'?'Fornecedor / favorecido':'Cliente / plataforma'}</th><th>Vencimento</th><th class="num">Valor</th><th class="num">Saldo</th><th>Situação</th><th></th></tr></thead><tbody>${displayed.map(b=>`<tr><td><strong>${e(b.description)}</strong></td><td>${e(b.partner)}</td><td>${dateLabel(b.due_date)}${b.state==='open'&&b.due_date<today()?'<small style="color:var(--danger)">Vencida</small>':''}</td><td class="num">${cash(b.amount_cents)}</td><td class="num">${b.state==='void'?'—':cash(b.remaining_cents)}</td><td>${badge(b.state==='void'?'Cancelada':b.state==='paid'?'Quitada':b.settled_cents?'Parcial':'Em aberto',b.state)}</td><td><div class="actions">${b.state==='open'?action('settle-bill',S.financeKind==='payable'?'Pagar':'Receber',b.id,'small primary'):''}${action('bill-history','Histórico',b.id,'small','clock')}</div></td></tr>`).join('')}</tbody></table></div></div>`:empty('Nenhuma conta nesta situação','Os pedidos geram contas a receber. Despesas e compras podem ser cadastradas pelo administrador.',action('new-bill','Nova conta','','primary','plus'),'wallet');
  return heading('Financeiro','Acompanhe pagamentos, recebimentos e repasses da loja.',action('new-bill','Nova conta','','primary','plus'))+tabs+stats+calendar+filters+body;
}
async function renderTemplates(){
  S.templates=await api('/api/templates');
  return heading('Mensagens prontas','Personalize os textos usados no atendimento pelo WhatsApp.')+`<div class="template-grid">${S.templates.map(t=>`<article class="template-card"><div class="row between space"><h3 style="margin:0">${e(t.title)}</h3>${icon('message')}</div><p>${e(t.body)}</p>${S.user.role==='admin'?action('edit-template','Editar mensagem',t.key,'small','edit'):badge('Texto disponível no pedido')}</article>`).join('')}</div><p class="note-line">Nome, número do pedido e total são preenchidos ao preparar a mensagem. A atendente pode revisar o texto antes de abrir o WhatsApp.</p>`;
}
async function renderUsers(){
  const data=await api('/api/users');S.users=data.users;S.canCreateAdmin=data.can_create_admin;
  const dev=S.user.role==='developer',canManage=!dev&&S.user.access_mode!=='trial';
  const buttons=dev?action('new-trial','Novo teste de 30 dias','','primary','plus')+(data.can_create_admin?action('new-user','Administrador permanente','','','shield'):''):canManage?action('new-user','Novo usuário','','primary','plus'):'';
  return heading('Usuários e acessos','Cada pessoa com seu acesso e suas permissões.',buttons)+(dev?'<p class="notice space">Crie o acesso de teste e entregue a senha inicial ao cliente. Os 30 dias começam no primeiro login válido. Acompanhe o uso e os feedbacks pelo menu.</p>':S.user.access_mode==='trial'?'<p class="notice space">Durante o teste, a criação e a liberação de acessos ficam com o desenvolvedor.</p>':'')+`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Nome / usuário</th><th>Perfil</th><th>Situação</th><th>Prazo de teste</th><th>Ações</th></tr></thead><tbody>${data.users.map(u=>`<tr><td><strong>${e(u.name)}</strong><small>${e(u.username)}</small></td><td>${e(roleLabels[u.role])}</td><td>${badge(!u.active?'Desativado':u.trial_status==='expired'?'Teste encerrado':'Ativo',u.active&&u.trial_status!=='expired'?'ready':'inactive')}${u.active&&u.must_change_password?'<small>Troca de senha no primeiro acesso</small>':''}</td><td>${u.access_mode==='trial'?`${badge(trialLabels[u.trial_status],u.trial_status==='running'?'pending':'inactive')}${u.trial_started_at?`<small>Início: ${e(stamp(u.trial_started_at))}</small><small>Fim: ${e(stamp(u.trial_expires_at))}</small>`:'<small>Contagem ainda não iniciada</small>'}`:u.trial_started_at?'Acesso permanente<small>Teste liberado pelo desenvolvedor</small>':'Permanente'}</td><td><div class="support-row-actions">${dev&&(u.access_mode==='trial'||u.trial_started_at)?action('activity-user','Ver uso',u.id,'small','clock'):''}${dev&&u.access_mode==='trial'?action('release-trial','Liberar definitivo',u.id,'small','check')+(u.active?action('disable-user','Desativar',u.id,'small danger'):''):''}${canManage&&u.active&&u.id!==S.user.id&&u.role!=='developer'&&u.access_mode!=='trial'?action('disable-user','Desativar',u.id,'small danger'):''}${u.can_delete?action('delete-user','Excluir',u.id,'small danger','trash'):''}</div></td></tr>`).join('')}</tbody></table></div></div>`;
}
async function renderIntegrations(){
  const data=await api('/api/integrations');
  return heading('Integrações','Veja o funcionamento disponível nesta primeira versão.')+`<div class="integration-list">${data.map(i=>`<article class="panel integration-card"><div class="integration-icon">${icon(i.name==='WhatsApp'?'message':i.name==='Balança'?'scale':'link')}</div><div class="body"><div class="row between"><h3>${e(i.name)}</h3>${badge(i.state==='manual'?'Disponível · envio manual':'Automação pendente',i.state==='manual'?'ready':'pending')}</div><strong class="small">${e(i.title)}</strong><p>${e(i.description)}</p></div></article>`).join('')}</div>`;
}
async function renderSettings(){
  const data=await api('/api/settings');
  return heading('Dados da loja','Identificação usada nos pedidos e nas mensagens.')+`<div class="settings-grid"><section class="panel"><h2>Informações da operação</h2><form data-form="settings" class="stack topspace">${field('Nome da loja','store_name',data.store_name,'required maxlength="120"')}${field('WhatsApp da loja','store_phone',phoneLabel(data.store_phone),'maxlength="40" inputmode="tel"')}${field('Endereço da loja','store_address',data.store_address,'maxlength="250"')}${formError()}<div>${submitButton('Salvar dados da loja')}</div></form></section><section class="panel"><h2>Sobre o sistema</h2><dl class="definition topspace"><div><dt>Produto</dt><dd>Demonstração de gestão comercial</dd></div><div><dt>Desenvolvimento</dt><dd>Skye Gestão e Inovação</dd></div><div><dt>Armazenamento</dt><dd>${e(S.profile.database_kind||'Demonstração neste navegador')}</dd><dt>Versão</dt><dd>1.0.0 demonstrativa</dd></div></dl><p class="note-line">Comandas e comprovantes gerados pelo programa não têm valor fiscal. Os pagamentos são registros internos, com conferência pela loja.</p>${window.SkyeDemo?.enabled?'':action('change-password','Trocar minha senha','','','shield')}</section></div>`;
}
async function renderTechnical(){
  const data=await api('/api/technical');
  return heading('Visão técnica','Acesso de desenvolvimento da Skye Gestão e Inovação.',action('new-trial','Novo teste de 30 dias','','primary','plus')+`<a class="btn" href="/demo/">${icon('cup')}Abrir demonstração</a>`)+`<div class="tech-info"><div class="stat"><div class="stat-label">Versão do aplicativo</div><div class="stat-value">${e(data.version)}</div></div><div class="stat"><div class="stat-label">Banco de dados</div><div class="stat-value" style="font-size:21px">${e(data.database)}</div></div><div class="stat"><div class="stat-label">Usuários habilitados</div><div class="stat-value">${data.active_users}</div></div></div><div class="support-grid"><section class="panel"><h2>Teste com acompanhamento</h2><p class="muted small">O cliente recebe 30 dias a partir do primeiro login válido. Consulte as telas abertas, as ações realizadas e a última atividade registrada.</p><div class="support-row-actions">${action('navigate-activity','Acompanhar uso','','primary','clock')}${action('navigate-users','Gerenciar acessos','','','customers')}</div></section><section class="panel"><h2>Feedbacks dos clientes</h2><p class="muted small">Erros, sugestões, dificuldades de uso e informações incorretas chegam com usuário, página e data. Registre a análise e marque o que foi resolvido.</p>${action('navigate-feedback','Ver feedbacks','','','message')}</section></div>${!data.admin_exists?`<section class="panel topspace"><h2>Administrador permanente</h2><p class="muted small">Se necessário, cadastre o primeiro administrador permanente da loja.</p>${action('new-user','Cadastrar administrador','','','shield')}</section>`:''}<p class="note-line">O acompanhamento mostra ações e telas. Dados operacionais e valores financeiros continuam restritos aos perfis da loja.</p>`;
}
async function customerModal(id=null,fromOrder=false){
  if(id&&!S.customers.some(c=>c.id===Number(id)))S.customers=await api('/api/customers');
  const c=S.customers.find(c=>c.id===Number(id))||{};
  const body=`<form id="customer-form" data-form="customer" data-id="${id||''}" data-from-order="${fromOrder?'1':''}" class="stack">${!id?`<details><summary>Colar dados recebidos no aplicativo</summary><label class="field">Dados do cliente<textarea id="paste-contact" rows="4" placeholder="Nome: …&#10;Telefone: …&#10;Endereço: …"></textarea><span class="hint">Copie os dados disponíveis no pedido. Confira os campos preenchidos antes de salvar.</span></label>${action('parse-contact','Preencher campos','','small topspace','plus')}</details>`:''}<div class="form-grid">${field('Nome do cliente','name',c.name||'','required maxlength="150" autocomplete="name"')}${field('Telefone com DDD','phone',c.phone?phoneLabel(c.phone):'','required maxlength="40" inputmode="tel" autocomplete="tel"')}</div><details${(c.street||fromOrder&&S.draft.fulfillment==='entrega')?' open':''}><summary>Endereço e observações</summary><div class="form-grid">${field('Rua / avenida','street',c.street||'','maxlength="180" autocomplete="street-address"')}${field('Número','number',c.number||'','maxlength="30"')}${field('Bairro','neighborhood',c.neighborhood||'','maxlength="100"')}${field('Cidade','city',c.city||'Cidade Modelo','maxlength="100"')}<label class="field full">Referência / complemento<input name="reference" value="${e(c.reference||'')}" maxlength="200"></label><label class="field full">Observações do cliente<textarea name="notes" rows="2" maxlength="1000">${e(c.notes||'')}</textarea></label></div></details>${formError()}</form>`;
  showModal(id?'Editar cliente':'Cadastro rápido de cliente','Nome e telefone são suficientes para cadastrar. Complete o endereço para entregas.',body,action('close-modal','Cancelar')+submitButton('Salvar cliente','customer-form'));
}
function itemModal(id){
  const p=S.catalog.products.find(p=>p.id===Number(id));if(!p||(p.price_cents===null&&p.mode!=='weight'))return;
  const groups=S.catalog.groups.filter(g=>g.category===p.category);
  const choices=groups.map(g=>`<section class="option-section" data-group="${g.key}" data-max="${g.max_choices??''}" data-min="${g.min_choices}"><div class="option-heading"><h3>${e(g.title)}${g.min_choices?' · Obrigatório':''}</h3><span class="option-counter" aria-live="polite">0${g.max_choices!==null?' / '+g.max_choices:''} selecionadas</span></div>${g.min_choices?`<p class="note-line">Selecione pelo menos ${g.min_choices}.</p>`:''}<div class="option-grid">${S.catalog.options.filter(o=>o.active&&o.category===p.category&&o.group_key===g.key).map(o=>`<label class="option-choice"><input type="checkbox" name="option" value="${o.id}"><span>${e(o.name)}</span>${o.price_cents?`<small>+ ${cash(o.price_cents)}</small>`:''}</label>`).join('')}</div></section>`).join('');
  const weight=p.mode==='weight'?`<label class="field space">Como informar a venda<select name="weight_input" id="weight-input-mode">${option('weight','Informar peso em gramas',p.price_cents===null?'amount':'weight')}${option('amount','Digitar valor da balança (R$)',p.price_cents===null?'amount':'weight')}</select></label><div id="scale-amount-fields"${p.price_cents!==null?' hidden':''}>${field('Valor mostrado na balança (R$)','scale_amount','','inputmode="decimal" placeholder="0,00"')}<p class="note-line">Informe o valor do produto. Os adicionais escolhidos são somados à parte.</p></div><div class="form-grid">${field('Peso bruto (g)','gross_g','','min="1" max="100000" step="1"','number')}${field('Tara da embalagem (g)','tare_g','0','min="0" max="100000" step="1"','number')}</div><div class="weight-result"><span>Peso líquido</span><strong id="item-net-weight">0 g</strong></div><p class="note-line" id="scale-mode-note"></p>`:field('Quantidade','quantity','1','min="1" max="100" step="1" required','number');
  const form=`<form id="item-form" data-form="cart-item" data-id="${p.id}">${p.description?`<p class="muted small space">${e(p.description)}</p>`:''}<div class="space">${weight}</div>${choices}<label class="field">Observações deste item<textarea name="notes" rows="2" maxlength="500" placeholder="Ex.: sem banana, separar os acompanhamentos…"></textarea></label>${formError()}</form>`;
  showModal(p.name+(p.size_ml?' · '+p.size_ml+' ml':''),'Personalize os detalhes antes de adicionar ao pedido.',form,action('close-modal','Cancelar')+`<button type="submit" form="item-form" class="btn primary" id="add-item-button">Adicionar · ${cash(p.price_cents)}</button>`,true);updateItemPreview();
}
function itemFormData(form){
  const p=S.catalog.products.find(p=>p.id===Number(form.dataset.id)),selected=$$('input[name="option"]:checked',form).map(n=>Number(n.value));
  const byAmount=p.mode==='weight'&&form.elements.weight_input.value==='amount';
  let scaleAmount=null;if(byAmount)scaleAmount=toCents(form.elements.scale_amount.value);
  return {p,quantity:p.mode==='weight'?1:Number(form.elements.quantity.value),gross:p.mode==='weight'?Number(form.elements.gross_g.value):0,tare:p.mode==='weight'?Number(form.elements.tare_g.value):0,scaleAmount,selected,options:S.catalog.options.filter(o=>selected.includes(o.id))};
}
function updateItemPreview(){
  const form=$('#item-form');if(!form)return;
  $$('.option-section',form).forEach(section=>{const selected=$$('input:checked',section).length,max=section.dataset.max===''?null:Number(section.dataset.max);$('.option-counter',section).textContent=`${selected}${max!==null?' / '+max:''} selecionadas`;$$('input[type="checkbox"]',section).forEach(input=>input.disabled=!input.checked&&max!==null&&selected>=max);});
  if(form.elements.weight_input){
    const byAmount=form.elements.weight_input.value==='amount';$('#scale-amount-fields').hidden=!byAmount;
    form.elements.scale_amount.required=byAmount;form.elements.gross_g.required=!byAmount;
    const p=S.catalog.products.find(p=>p.id===Number(form.dataset.id));
    $('#scale-mode-note').textContent=byAmount?'O peso é opcional. Sem o peso, não haverá baixa automática dos insumos por kg.':p.price_cents===null?'Cadastre o preço por kg no cardápio ou escolha digitar o valor da balança.':cash(p.price_cents)+' por kg. Informe o peso bruto e desconte a embalagem.';
  }
  try{
    const {p,quantity,gross,tare,options,scaleAmount}=itemFormData(form);
    if($('#item-net-weight'))$('#item-net-weight').textContent=gross>tare?`${gross-tare} g`:'Não informado';
    const valid=Number.isInteger(quantity)&&quantity>0&&(p.mode!=='weight'||scaleAmount>0||gross>tare);
    $('#add-item-button').textContent='Adicionar · '+cash(valid?lineTotal(p,quantity,options,gross,tare,scaleAmount):0);
  }catch{$('#add-item-button').textContent='Adicionar · confira os valores';}
}

async function orderModal(id){
  const o=await api('/api/orders/'+id);S.detailOrder=o;const next=nextStatus(o);
  const items=o.items.map(i=>`<div class="detail-item"><div class="detail-item-head"><span>${i.quantity}× ${e(i.name)}</span>${i.total_cents!==undefined?`<span>${cash(i.total_cents)}</span>`:''}</div>${i.options.length?`<p>${e(i.options.map(x=>x.name).join(' · '))}</p>`:''}${i.net_g?`<p>Peso bruto ${i.gross_g} g · Tara ${i.tare_g} g · Líquido ${i.net_g} g</p>`:i.pricing_source==='scale_total'?'<p>Valor da balança · peso não informado</p>':''}${i.notes?`<p><strong>Observação:</strong> ${e(i.notes)}</p>`:''}</div>`).join('');
  const payment=o.payment_status==='platform'?(o.bill?.state==='paid'?'Repasse recebido':'Pago na plataforma · repasse pendente'):o.bill?.state==='paid'?'Recebido pela loja':o.bill?.settled_cents?'Recebido parcialmente':'A receber';
  const body=`<div class="order-detail-top">${badge(statusLabels[o.status],o.status)}<span class="muted small">${e(stamp(o.created_at))}</span></div><div class="space"><h3>${e(o.customer_name||'Consumidor do balcão')}</h3><p class="muted small" style="margin:0">${e(channelLabels[o.channel])} · ${e(fulfillmentLabels[o.fulfillment])}${o.external_ref?' · Referência '+e(o.external_ref):''}</p>${o.customer_phone?`<p class="small" style="margin:8px 0 0">${e(phoneLabel(o.customer_phone))}</p>`:''}${o.address?`<p class="small" style="margin:8px 0 0">${e(o.address)}</p>`:''}</div><div class="detail-items">${items}</div>${o.notes?`<p class="notice topspace">${e(o.notes)}</p>`:''}${o.total_cents!==undefined?`<div class="definition topspace"><div class="row between"><span class="muted small">Subtotal</span><span class="small">${cash(o.subtotal_cents)}</span></div>${o.discount_cents?`<div class="row between"><span class="muted small">Desconto</span><span class="small">− ${cash(o.discount_cents)}</span></div>`:''}${o.delivery_cents?`<div class="row between"><span class="muted small">Entrega</span><span class="small">${cash(o.delivery_cents)}</span></div>`:''}</div><div class="detail-total"><span>Total do pedido</span><strong>${cash(o.total_cents)}</strong></div><p class="note-line">${e(paymentLabels[o.payment_method]||'Múltiplas formas')} · ${e(payment)}</p>${paymentDetails(o)}`:''}${o.stock_warnings?.length?`<p class="notice topspace">${o.stock_warnings.map(e).join('<br>')}</p>`:''}${o.last_whatsapp_opened?`<p class="note-line">Última abertura do WhatsApp: ${e(stamp(o.last_whatsapp_opened))}.</p>`:''}<div class="row topspace">${action('print-order','Imprimir comanda',o.id,'small','print')}${o.customer_id&&S.user.role!=='producao'?action('order-message','Avisar cliente',o.id,'small whatsapp','message'):''}${S.user.role==='admin'&&o.status!=='cancelled'?action('cancel-order','Cancelar pedido',o.id,'small danger'):''}</div>`;
  showModal('Pedido #'+o.code,'Registrado por '+o.operator,body,action('close-modal','Fechar')+(next?`<button class="btn primary" data-action="order-next" data-id="${o.id}" data-status="${next}">${e(nextLabel(next))}</button>`:''),true);
}
async function messageModal(orderId=null,customerId=null,key=null){
  let order=null;if(orderId){order=await api('/api/orders/'+orderId);customerId=order.customer_id;}
  if(!customerId){toast('Cadastre e vincule um cliente com telefone a este pedido.',true);return;}
  S.templates=await api('/api/templates');
  const selected=key||(order&&['received','preparing','ready','out_for_delivery','completed'].includes(order.status)?order.status:'contact');
  const data={customer_id:Number(customerId),order_id:orderId?Number(orderId):null,template_key:selected,...(window.SkyeDemo?.testPhone?{phone_override:window.SkyeDemo.testPhone}:{})};
  const prepared=await api('/api/messages/prepare',{method:'POST',body:data});S.message={...data,...prepared};
  const testNumber=window.SkyeDemo?.enabled?`<label class="field space">Seu número para testar (com DDD)<input id="demo-message-phone" inputmode="tel" autocomplete="tel" placeholder="Informe seu celular com DDD" value="${e(window.SkyeDemo.testPhone||'')}"><span class="hint">Os telefones dos exemplos são fictícios. Use seu próprio número para experimentar a mensagem.</span></label>`:'';
  const body=`<div class="message-recipient"><div class="avatar">${icon('message')}</div><div><strong>${e(prepared.name)}</strong><p>${e(phoneLabel(prepared.phone))}${order?' · Pedido #'+e(order.code):''}</p></div></div>${testNumber}<label class="field space">Mensagem<select id="message-template">${S.templates.filter(t=>order||t.key==='contact').map(t=>option(t.key,t.title,selected)).join('')}</select></label><label class="field">Texto para revisão<textarea class="message-preview" id="message-body" rows="7" maxlength="4000">${e(prepared.text)}</textarea></label><p class="note-line">O botão abre a conversa no WhatsApp Web conectado neste navegador. Confira o destinatário e confirme o envio no WhatsApp. O registro de abertura não confirma a entrega da mensagem.</p><p class="error" id="message-phone-error" role="alert"></p><div class="message-actions">${action('copy-message','Copiar texto','','','message')}<a class="btn whatsapp" data-action="open-whatsapp" id="whatsapp-link" href="${e(prepared.url)}" target="_blank" rel="noopener noreferrer">${icon('message')} Simular mensagem</a><a class="btn small" data-action="open-whatsapp" id="whatsapp-app-link" href="${e(prepared.app_url||'#')}" target="_blank" rel="noopener noreferrer">Simulação local</a></div>`;
  showModal('Avisar cliente','Mensagem pronta para o atendimento individual.',body,action('close-modal','Fechar'));
  updateMessageLink();
}
function updateMessageLink(){
  if(!S.message||!$('#message-body')||!$('#whatsapp-link'))return false;
  try{
    const phone=$('#demo-message-phone')?$('#demo-message-phone').value:S.message.phone;
    const links=whatsappLinks(phone,$('#message-body').value);
    S.message.phone=normalizePhone(phone);S.message.valid=true;
    if(window.SkyeDemo?.enabled)window.SkyeDemo.testPhone=S.message.phone;
    $('#whatsapp-link').href=links.web;$('#whatsapp-app-link').href=links.app;
    [$('#whatsapp-link'),$('#whatsapp-app-link')].forEach(link=>{link.removeAttribute('aria-disabled');link.classList.remove('link-disabled');});
    $('#message-phone-error').textContent='';return true;
  }catch{
    S.message.valid=false;[ $('#whatsapp-link'),$('#whatsapp-app-link')].forEach(link=>{link.href='#';link.setAttribute('aria-disabled','true');link.classList.add('link-disabled');});
    return false;
  }
}
function productModal(id=null){
  const p=S.catalog.products.find(p=>p.id===Number(id))||{};
  const body=`<form id="product-form" data-form="product" data-id="${id||''}" class="stack"><div class="form-grid">${field('Nome do produto','name',p.name||'','required maxlength="150"')}${field('Categoria','category',p.category||'Monte seu copo','required maxlength="80" list="catalog-categories"')}<datalist id="catalog-categories">${[...new Set(S.catalog.products.map(p=>p.category))].map(c=>`<option>${e(c)}</option>`).join('')}</datalist>${field('Volume em ml (opcional)','size_ml',p.size_ml||'','min="1" max="10000"','number')}<label class="field">Tipo de venda<select name="mode">${option('fixed','Por unidade ou tamanho',p.mode||'fixed')}${option('weight','Por peso (preço por kg)',p.mode)}</select></label>${field('Preço (R$)','price',p.price_cents==null?'':decimal(p.price_cents),'inputmode="decimal" placeholder="A definir"')}<label class="check"><input type="checkbox" name="active"${p.active!==0?' checked':''}> Produto ativo</label></div><label class="field">Descrição / composição<textarea name="description" rows="3" maxlength="2000">${e(p.description||'')}</textarea></label><details><summary>Vínculo com o Uai Rango</summary><p class="note-line">Preencha estes campos com o identificador correspondente do catálogo do Uai Rango quando ele estiver disponível. Cada ambiente pode ter identificadores diferentes.</p><div class="form-grid">${field('ID no ambiente de testes','uairango_sandbox_id',p.uairango_sandbox_id||'','maxlength="200" autocomplete="off"')}${field('ID no ambiente oficial','uairango_production_id',p.uairango_production_id||'','maxlength="200" autocomplete="off"')}</div></details>${formError()}</form>`;
  showModal(id?'Editar produto':'Novo produto','Para venda por peso, informe o valor de um quilo.',body,action('close-modal','Cancelar')+submitButton('Salvar produto','product-form'));
}
function optionModal(id){
  const o=S.catalog.options.find(o=>o.id===Number(id));
  showModal('Editar opção',o.category,`<form id="option-form" data-form="option" data-id="${o.id}" class="stack">${field('Nome','name',o.name,'required maxlength="150"')}${field('Acréscimo (R$)','price',decimal(o.price_cents),'required inputmode="decimal"')}<label class="check"><input type="checkbox" name="active"${o.active?' checked':''}> Opção ativa</label><details><summary>Vínculo com o Uai Rango</summary><p class="note-line">Preencha estes campos com o identificador correspondente do catálogo do Uai Rango quando ele estiver disponível. Cada ambiente pode ter identificadores diferentes.</p><div class="form-grid">${field('ID no ambiente de testes','uairango_sandbox_id',o.uairango_sandbox_id||'','maxlength="200" autocomplete="off"')}${field('ID no ambiente oficial','uairango_production_id',o.uairango_production_id||'','maxlength="200" autocomplete="off"')}</div></details>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar opção','option-form'));
}
function groupModal(id){
  const g=S.catalog.groups.find(g=>g.id===Number(id));
  showModal(g.title,g.category,`<form id="group-form" data-form="group" data-id="${g.id}" class="stack"><div class="form-grid">${field('Quantidade mínima','min_choices',g.min_choices,'required min="0" max="100"','number')}${field('Quantidade máxima','max_choices',g.max_choices??'','min="0" max="100" placeholder="Sem limite definido"','number')}</div><p class="note-line">Mínimo zero permite deixar o grupo sem escolhas. Máximo em branco mantém o limite em aberto.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar regra','group-form'));
}
function ingredientModal(){
  showModal('Novo ingrediente ou embalagem','Escolha a unidade que será usada nas entradas e nas fichas técnicas.',`<form id="ingredient-form" data-form="ingredient" class="stack">${field('Nome','name','','required maxlength="120"')}<div class="form-grid"><label class="field">Unidade de controle<select name="unit">${['kg','g','L','ml','un'].map(u=>option(u,u,'kg')).join('')}</select></label>${field('Estoque inicial','stock','0','required min="0" step="0.001"','number')}${field('Estoque mínimo','min_stock','0','required min="0" step="0.001"','number')}</div>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Cadastrar ingrediente','ingredient-form'));
}
function stockModal(id){
  const i=S.ingredients.find(i=>i.id===Number(id));
  const body=`<form id="stock-form" data-form="stock" data-id="${i.id}" class="stack"><p class="muted small">Estoque atual: <strong>${amount(i.stock)} ${e(i.unit)}</strong></p><div class="form-grid"><label class="field">Movimentação<select name="kind" id="stock-kind">${option('entrada','Entrada de compra','entrada')}${option('vitrine','Abastecimento da vitrine (venda por peso)','')}${option('perda','Perda ou saída','')}${option('inventario','Ajuste para saldo contado','')}</select></label>${field('Quantidade ('+i.unit+')','quantity','','required min="0" step="0.001"','number')}</div><p class="note-line" id="stock-kind-help" hidden>Para a venda por peso, informe quanto desse ingrediente foi colocado no pote. O valor será baixado agora e registrado no histórico.</p>${field('Motivo / referência','reason','','required minlength="3" maxlength="200"')}<label class="check" id="create-payable-label"><input type="checkbox" name="create_payable" id="stock-create-payable"> Gerar conta a pagar desta compra</label><div id="stock-payable-fields" class="form-grid" hidden>${field('Fornecedor','supplier','','disabled maxlength="150"')}${field('Valor total da compra (R$)','amount','','disabled inputmode="decimal"')}${field('Vencimento','due_date',S.financeDay||today(),'disabled','date')}</div>${formError()}</form>`;
  showModal('Movimentar '+i.name,'Informe a quantidade na unidade de controle cadastrada.',body,action('close-modal','Cancelar')+submitButton('Salvar movimentação','stock-form'));
}
function recipeModal(){
  if(!S.ingredients?.length){toast('Cadastre primeiro os ingredientes do estoque.',true);return;}
  const targets=`<optgroup label="Produtos e tamanhos">${S.catalog.products.map(p=>`<option value="p:${p.id}">${e(p.name)}${p.size_ml?' · '+p.size_ml+' ml':p.mode==='weight'?' · por 1 kg vendido':''}</option>`).join('')}</optgroup><optgroup label="Opções e adicionais">${S.catalog.options.map(o=>`<option value="o:${o.id}">${e(o.category)} · ${e(o.name)}</option>`).join('')}</optgroup>`;
  showModal('Adicionar ingrediente à ficha','Informe o consumo por uma unidade do produto ou por uma seleção da opção.',`<form id="recipe-form" data-form="recipe" class="stack"><label class="field">Produto ou opção<select name="target" required>${targets}</select></label><label class="field">Ingrediente<select name="ingredient_id" id="recipe-ingredient">${S.ingredients.map(i=>option(i.id,i.name+' ('+i.unit+')',null)).join('')}</select></label>${field('Quantidade consumida na unidade do ingrediente','quantity','','required min="0.001" step="0.001"','number')}<p class="note-line">Para produtos por peso sem baixa prévia na vitrine, informe o consumo por 1 kg vendido. Se os ingredientes já foram baixados ao colocar os potes na vitrine, não os inclua aqui. Não duplique ingredientes que já são baixados pelas opções.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar ficha','recipe-form'));
}
function billModal(){
  showModal('Nova conta','Cadastre a despesa ou o valor a receber.',`<form id="bill-form" data-form="bill" class="stack"><div class="form-grid"><label class="field">Tipo<select name="kind">${option('payable','Conta a pagar',S.financeKind)}${option('receivable','Conta a receber',S.financeKind)}</select></label>${field('Vencimento','due_date',S.financeDay||today(),'required','date')}</div>${field('Descrição','description','','required minlength="3" maxlength="180"')}${field('Fornecedor, cliente ou favorecido','partner','','required minlength="2" maxlength="150"')}${field('Valor total (R$)','amount','','required inputmode="decimal"')}${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar conta','bill-form'));
}
function settleModal(id){
  const b=S.bills.find(b=>b.id===Number(id));
  showModal(b.kind==='payable'?'Registrar pagamento':'Registrar recebimento',b.description,`<form id="settle-form" data-form="settle" data-id="${b.id}" class="stack"><p class="muted small">Saldo em aberto: <strong>${cash(b.remaining_cents)}</strong></p>${field('Valor a liquidar (R$)','amount',decimal(b.remaining_cents),'required inputmode="decimal"')}<label class="field">Meio utilizado<select name="method">${['Pix','Dinheiro','Transferência','Cartão','Repasse da plataforma','Outro'].map(v=>option(v,v,'Pix')).join('')}</select></label>${field('Observação (opcional)','note','','maxlength="300"')}<p class="note-line">Registre somente o valor já conferido pela loja. Essa ação atualiza o controle interno.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Confirmar registro','settle-form'));
}
async function billHistory(id){
  const rows=await api('/api/finance/'+id+'/settlements');const bill=S.bills.find(b=>b.id===Number(id));
  showModal('Histórico da conta',bill.description,rows.length?`<div class="stack">${rows.map(r=>`<div class="detail-item"><div class="row between"><strong>${cash(r.amount_cents)}</strong><span class="small muted">${e(stamp(r.created_at))}</span></div><p class="small muted">${e(r.method)} · ${e(r.operator)}</p>${r.note?`<p class="small">${e(r.note)}</p>`:''}</div>`).join('')}</div>`:'<p class="muted small">Nenhum pagamento ou recebimento registrado.</p>',action('close-modal','Fechar'));
}
function userModal(trial=false){
  const dev=S.user.role==='developer';
  const roles=trial?[['admin','Administrador'],['atendente','Atendimento'],['producao','Produção']]:dev?[['admin','Administrador']]:[['atendente','Atendimento'],['producao','Produção'],['admin','Administrador']];
  showModal(trial?'Novo teste de 30 dias':dev?'Cadastrar administrador':'Novo usuário','A pessoa precisará trocar a senha inicial ao entrar no sistema.',`<form id="user-form" data-form="user" data-trial="${trial?'1':'0'}" class="stack">${trial?'<p class="notice">O prazo começa no primeiro login válido. Ao completar 30 dias, o acesso é bloqueado até a liberação pelo desenvolvedor.</p>':''}${field('Nome','name','','required minlength="2" maxlength="100"')}${field('Usuário ou e-mail','username','','required minlength="3" maxlength="120" autocomplete="off"')}${field('Senha inicial','password','','required minlength="12" maxlength="128" autocomplete="new-password"','password')}<label class="field">Perfil<select name="role">${roles.map(([v,l])=>option(v,l,'')).join('')}</select></label>${formError()}</form>`,action('close-modal','Cancelar')+submitButton(trial?'Criar teste de 30 dias':'Criar acesso','user-form'));
}
function templateModal(key){
  const t=S.templates.find(t=>t.key===key);
  showModal('Editar mensagem',t.title,`<form id="template-form" data-form="template" data-key="${e(key)}" class="stack"><label class="field">Texto da mensagem<textarea name="body" rows="8" required minlength="5" maxlength="3000">${e(t.body)}</textarea></label><p class="note-line">Campos disponíveis: {cliente}, {pedido}, {itens}, {total}, {loja} e {orientacao}. Eles serão preenchidos com os dados do pedido.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar mensagem','template-form'));
}
function cancelModal(id){
  showModal('Cancelar pedido','O motivo ficará registrado. Valores recebidos geram uma conta a pagar para acompanhar o estorno.',`<form id="cancel-form" data-form="cancel-order" data-id="${id}" class="stack">${field('Motivo do cancelamento','reason','','required minlength="3" maxlength="300"')}<label class="check"><input type="checkbox" name="restore_stock"> Devolver ao estoque somente os insumos que não foram utilizados</label>${formError()}</form>`,action('close-modal','Voltar')+submitButton('Confirmar cancelamento','cancel-form'));
}
async function printOrder(id){
  const o=await api('/api/orders/'+id);
  $('#print-area').innerHTML=`<header><div class="print-brand">SKYE DEMO</div><h2>${e(S.profile.name)}</h2><p>Pedido #${e(o.code)}<br>${e(stamp(o.created_at))}</p><small>Comanda sem valor fiscal</small></header><hr><p><strong>${e(o.customer_name||'Consumidor do balcão')}</strong><br>${e(fulfillmentLabels[o.fulfillment])}${o.customer_phone?'<br>'+e(phoneLabel(o.customer_phone)):''}${o.address?'<br>'+e(o.address):''}</p><hr>${o.items.map(i=>`<div class="print-item"><strong>${i.quantity}× ${e(i.name)}</strong>${i.total_cents!==undefined?' — '+cash(i.total_cents):''}${i.net_g?'<br>Peso líquido: '+i.net_g+' g':i.pricing_source==='scale_total'?'<br>Valor da balança · peso não informado':''}${i.options.length?'<br>'+e(i.options.map(x=>x.name).join(', ')):''}${i.notes?'<br>Obs.: '+e(i.notes):''}</div>`).join('')}${o.notes?'<hr><p>Observações: '+e(o.notes)+'</p>':''}${o.total_cents!==undefined?'<hr><p>Desconto: '+cash(o.discount_cents)+'<br>Entrega: '+cash(o.delivery_cents)+'</p><p class="print-total">Total: '+cash(o.total_cents)+'</p>'+paymentDetails(o):''}<hr><small>Desenvolvido por Skye Gestão e Inovação</small>`;
  window.print();
}

async function checkout(button){
  const box=$('#checkout-error');box.textContent='';
  if(!S.cart.length)return;
  button.disabled=true;
  try{
    const draft=S.draft;
    const payload={request_key:S.requestKey,customer_id:draft.customer_id?Number(draft.customer_id):null,channel:draft.channel,fulfillment:draft.fulfillment,external_ref:draft.external_ref,delivery_cents:toCents(draft.delivery),discount_cents:toCents(draft.discount),payment_method:draft.payment_method,payment_status:draft.payment_status,notes:draft.notes,
      ...(draft.payments?{payments:draft.payments.map(p=>({method:p.method,amount_cents:toCents(p.amount),status:p.status}))}:{}),
      items:S.cart.map(i=>({product_id:i.product_id,quantity:i.quantity,...(i.net_g?{gross_g:i.gross_g,tare_g:i.tare_g}:{}),...(i.scale_total_cents!=null?{scale_total_cents:i.scale_total_cents}:{}),options:i.options.map(o=>o.id),notes:i.notes}))};
    if(payload.payments&&payload.payments.reduce((n,p)=>n+p.amount_cents,0)!==cartTotal())throw new Error('A soma dos pagamentos deve ser igual ao total do pedido.');
    const order=await api('/api/orders',{method:'POST',body:payload});
    S.cart=[];S.draft=newDraft();S.requestKey=makeRequestKey();
    toast('Pedido #'+order.code+' registrado.');await go('orders');await orderModal(order.id);
  }catch(err){box.textContent=err.message;}finally{button.disabled=false;}
}

document.addEventListener('submit',async event=>{
  const form=event.target;if(!form.matches('form[data-form]'))return;event.preventDefault();
  const kind=form.dataset.form,data=Object.fromEntries(new FormData(form));
  const error=$('[data-error]',form);if(error)error.textContent='';
  const button=$('button[type="submit"]',form)||(form.id?$(`button[form="${form.id}"]`):null);if(button)button.disabled=true;
  try{
    if(kind==='login'){const result=await api('/api/login',{method:'POST',body:{username:data.username,password:data.password}});S.user=result.user;S.csrf=result.csrf;await afterLogin();}
    else if(kind==='password'){
      if(data.new_password!==data.confirmation)throw new Error('As duas senhas novas não conferem.');
      const forced=Boolean(S.user.must_change_password);await api('/api/password',{method:'POST',body:{current_password:data.current_password,new_password:data.new_password}});S.user.must_change_password=0;closeModal();toast('Sua senha foi alterada.');if(forced)await afterLogin();
    }
    else if(kind==='orders-filter'){S.orderFilters={q:data.q,status:data.status,channel:data.channel,day:data.day};await go('orders');}
    else if(kind==='catalog-filter'){S.catalogSearch=data.q;await go('catalog');}
    else if(kind==='sales-filter'){S.salesFilters=data;await go('sales');}
    else if(kind==='customers-filter'){S.customerSearch=data.q;await go('customers');}
    else if(kind==='cart-item'){
      const {p,quantity,gross,tare,options,selected,scaleAmount}=itemFormData(form);
      if(!Number.isInteger(quantity)||quantity<1||quantity>100)throw new Error('Informe uma quantidade de 1 a 100.');
      if(p.mode==='weight'&&(!Number.isInteger(gross)||!Number.isInteger(tare)||(gross>0?gross<=tare:tare>0)||scaleAmount===null&&gross<=tare))throw new Error('O peso bruto deve ser maior que a tara.');
      if(scaleAmount!==null&&scaleAmount<=0)throw new Error('Informe um valor da balança maior que zero.');
      for(const group of S.catalog.groups.filter(g=>g.category===p.category)){
        const count=options.filter(o=>o.group_key===group.key).length;
        if(count<group.min_choices)throw new Error(`Selecione ao menos ${group.min_choices} em ${group.title}.`);
        if(group.max_choices!==null&&count>group.max_choices)throw new Error(`Selecione no máximo ${group.max_choices} em ${group.title}.`);
      }
      S.cart.push({product_id:p.id,name:p.name+(p.size_ml?' '+p.size_ml+' ml':''),quantity,gross_g:p.mode==='weight'&&gross>tare?gross:null,tare_g:p.mode==='weight'&&gross>tare?tare:null,net_g:p.mode==='weight'&&gross>tare?gross-tare:null,scale_total_cents:scaleAmount,options,notes:data.notes||'',total_cents:lineTotal(p,quantity,options,gross,tare,scaleAmount)});
      closeModal();$('#cart-container').innerHTML=renderCart();toast('Item adicionado ao pedido.');
    }
    else if(kind==='customer'){
      const payload={...data,phone:normalizePhone(data.phone)};
      const result=await api('/api/customers'+(form.dataset.id?'/'+form.dataset.id:''),{method:form.dataset.id?'PUT':'POST',body:payload});
      S.customers=await api('/api/customers');
      if(form.dataset.fromOrder){S.draft.customer_id=String(result.id);closeModal();$('#cart-container').innerHTML=renderCart();}
      else{closeModal();S.customerSearch='';await go('customers');}
      toast('Cliente salvo.');
    }
    else if(kind==='product'){
      const payload={name:data.name,category:data.category,size_ml:data.size_ml?Number(data.size_ml):null,mode:data.mode,price_cents:data.price.trim()?toCents(data.price):null,description:data.description,active:form.elements.active.checked,uairango_sandbox_id:data.uairango_sandbox_id,uairango_production_id:data.uairango_production_id};
      const saved=await api('/api/products'+(form.dataset.id?'/'+form.dataset.id:''),{method:form.dataset.id?'PUT':'POST',body:payload});
      if(!form.dataset.id){S.recentProduct=saved.id;S.catalogTab='products';S.catalogSearch='';}
      S.catalog=null;closeModal();await go('catalog');toast('Produto salvo.');
    }
    else if(kind==='option'){
      await api('/api/options/'+form.dataset.id,{method:'PUT',body:{name:data.name,price_cents:toCents(data.price),active:form.elements.active.checked,uairango_sandbox_id:data.uairango_sandbox_id,uairango_production_id:data.uairango_production_id}});S.catalog=null;closeModal();await go('catalog');toast('Opção salva.');
    }
    else if(kind==='group'){
      await api('/api/groups/'+form.dataset.id,{method:'PUT',body:{min_choices:Number(data.min_choices),max_choices:data.max_choices===''?null:Number(data.max_choices)}});S.catalog=null;closeModal();await go('catalog');toast('Regra de montagem salva.');
    }
    else if(kind==='ingredient'){
      await api('/api/ingredients',{method:'POST',body:{name:data.name,unit:data.unit,stock:Number(data.stock),min_stock:Number(data.min_stock)}});closeModal();await go('stock');toast('Ingrediente cadastrado.');
    }
    else if(kind==='stock'){
      const payable=form.elements.create_payable.checked;
      await api('/api/stock',{method:'POST',body:{ingredient_id:Number(form.dataset.id),kind:data.kind,quantity:Number(data.quantity),reason:data.reason,create_payable:payable,amount_cents:payable?toCents(data.amount):0,supplier:payable?data.supplier:'',due_date:payable?data.due_date:''}});closeModal();await go('stock');toast('Movimentação registrada'+(payable?' e conta a pagar criada.':'.'));
    }
    else if(kind==='recipe'){
      const [type,id]=data.target.split(':');
      await api('/api/recipes',{method:'POST',body:{product_id:type==='p'?Number(id):null,option_id:type==='o'?Number(id):null,ingredient_id:Number(data.ingredient_id),quantity:Number(data.quantity)}});S.catalog=null;closeModal();S.stockTab='recipes';await go('stock');toast('Ficha técnica salva.');
    }
    else if(kind==='bill'){
      await api('/api/finance',{method:'POST',body:{kind:data.kind,description:data.description,partner:data.partner,amount_cents:toCents(data.amount),due_date:data.due_date}});S.financeKind=data.kind;S.financeState='open';closeModal();await go('finance');toast('Conta cadastrada.');
    }
    else if(kind==='settle'){
      await api('/api/finance/'+form.dataset.id+'/settle',{method:'POST',body:{amount_cents:toCents(data.amount),method:data.method,note:data.note}});closeModal();await go('finance');toast('Registro confirmado.');
    }
    else if(kind==='user'){
      await api('/api/users',{method:'POST',body:{name:data.name,username:data.username,password:data.password,role:data.role,...(form.dataset.trial==='1'?{access_mode:'trial'}:{})}});closeModal();await go('users');toast('Acesso criado. A senha será trocada no primeiro login.');
    }
    else if(kind==='notice-send'){
      await api('/api/notices',{method:'POST',body:{...data,recipient_id:Number(data.recipient_id)}});
      closeModal();await go('notices');toast('Aviso enviado.');
    }
    else if(kind==='feedback-send'){
      if(data.message.trim().length<10)throw new Error('Descreva seu relato com pelo menos 10 caracteres.');
      await api('/api/feedback',{method:'POST',body:{type:data.type,message:data.message,page:form.dataset.page}});closeFeedback();toast('Feedback enviado. Obrigado por ajudar a melhorar o sistema.');
    }
    else if(kind==='activity-filter'){S.activityFilters={user_id:data.user_id,kind:data.kind,start:data.start,end:data.end};S.activityOffset=0;await go('activity');}
    else if(kind==='feedback-filter'){S.feedbackFilters={status:data.status,type:data.type,user_id:data.user_id};S.feedbackOffset=0;await go('feedback');}
    else if(kind==='feedback-review'){
      await api('/api/feedback/'+form.dataset.id,{method:'PATCH',body:{status:data.status,admin_notes:data.admin_notes}});closeModal();await go('feedback');toast('Feedback atualizado.');
    }
    else if(kind==='release-trial'){
      await api('/api/users/'+form.dataset.id+'/release-trial',{method:'POST',body:{}});closeModal();await go('users');toast('Acesso permanente liberado. O cliente poderá entrar novamente.');
    }
    else if(kind==='template'){
      await api('/api/templates/'+encodeURIComponent(form.dataset.key),{method:'PUT',body:{body:data.body}});closeModal();await go('messages');toast('Mensagem salva.');
    }
    else if(kind==='settings'){
      await api('/api/settings',{method:'PUT',body:data});S.profile=await api('/api/profile');renderShell();await go('settings');toast('Dados da loja atualizados.');
    }
    else if(kind==='cancel-order'){
      await api('/api/orders/'+form.dataset.id+'/status',{method:'POST',body:{status:'cancelled',reason:data.reason,restore_stock:form.elements.restore_stock.checked}});closeModal();await go('orders');toast('Pedido cancelado. Confira os estornos no financeiro.');
    }
    else if(kind==='delete-user'){
      await api('/api/users/'+form.dataset.id,{method:'DELETE'});closeModal();await go('users');toast('Usuário excluído. Os registros anteriores foram preservados.');
    }
    else if(kind==='disable-user'){
      await api('/api/users/'+form.dataset.id+'/disable',{method:'POST',body:{}});closeModal();await go('users');toast('Acesso desativado.');
    }
  }catch(err){
    setFormError(form,err.message);
    if(kind==='customer'&&form.dataset.fromOrder&&err.details?.customer_id){const box=$('[data-error]',form);box.insertAdjacentHTML('afterend',action('select-existing-customer','Usar cadastro de '+e(err.details.name),err.details.customer_id,'small'));}
  }finally{if(button)button.disabled=false;}
});

document.addEventListener('click',async event=>{
  const node=event.target.closest('[data-action]');if(!node||node.disabled)return;
  const name=node.dataset.action,id=node.dataset.id;
  if(name==='open-whatsapp'){
    if(!updateMessageLink()){event.preventDefault();$('#message-phone-error').textContent='Informe um telefone real com DDD para abrir a conversa.';$('#demo-message-phone')?.focus();return;}
    if(S.message)api('/api/messages/prepare',{method:'POST',body:{customer_id:S.message.customer_id,order_id:S.message.order_id,template_key:S.message.template_key,text:$('#message-body').value,record_open:true,...(window.SkyeDemo?.enabled?{phone_override:S.message.phone}:{})}}).catch(err=>toast(err.message,true));return;
  }
  event.preventDefault();
  try{
    if(name==='navigate')await go(node.dataset.page);
    else if(name.startsWith('navigate-'))await go({'navigate-new':'new-order','navigate-orders':'orders','navigate-users':'users','navigate-activity':'activity','navigate-feedback':'feedback'}[name]);
    else if(name==='refresh')await go(S.page);
    else if(name==='close-modal')closeModal();
    else if(name==='toggle-menu')$('.sidebar').classList.toggle('open');
    else if(name==='logout'){await api('/api/logout',{method:'POST',body:{}});clearSessionState();closeModal();closeFeedback();renderLogin();}
    else if(name==='change-password')showModal('Trocar minha senha','Use uma senha pessoal para o seu acesso.',passwordForm(),action('close-modal','Fechar'));
    else if(name==='demo-reset')showModal('Restaurar os exemplos','Esta ação afeta apenas a demonstração neste navegador.','<p class="small muted">Os dados fictícios iniciais serão restaurados. As alterações feitas neste teste serão descartadas.</p>',action('close-modal','Continuar testando')+action('demo-reset-confirm','Restaurar exemplos','','primary','refresh'));
    else if(name==='demo-reset-confirm'){window.SkyeDemo.reset();S.catalog=null;S.cart=[];S.draft=newDraft();S.requestKey=makeRequestKey();S.orderFilters={status:'active',q:'',channel:'',day:''};closeModal();S.profile=await api('/api/profile');S.user=await api('/api/me');renderShell();await go('orders');toast('Exemplos restaurados.');}
    else if(name==='category'){S.category=node.dataset.category;$$('.category-tab').forEach(n=>n.classList.toggle('active',n.dataset.category===S.category));$('#product-results').innerHTML=productsHTML();}
    else if(name==='split-payment'){
      const total=Math.max(0,cartTotal()),first=Math.ceil(total/2),second=total-first;
      S.draft.payments=[{method:S.draft.payment_method,amount:decimal(first),status:S.draft.payment_status},{method:S.draft.payment_method==='dinheiro'?'pix':'dinheiro',amount:decimal(second),status:'pending'}];$('#cart-container').innerHTML=renderCart();
    }
    else if(name==='single-payment'){S.draft.payments=null;$('#cart-container').innerHTML=renderCart();}
    else if(name==='add-payment'){
      if(S.draft.payments.length>=20)return;let remaining=0;try{remaining=cartTotal()-S.draft.payments.reduce((n,p)=>n+toCents(p.amount),0);}catch{}
      S.draft.payments.push({method:'pix',amount:remaining>0?decimal(remaining):'',status:'pending'});$('#cart-container').innerHTML=renderCart();
    }
    else if(name==='remove-payment'){S.draft.payments.splice(Number(id),1);$('#cart-container').innerHTML=renderCart();}
    else if(name==='login-help')showModal('Recuperar meu acesso','A recuperação preserva o cadastro existente.','<p class="small">Peça ao responsável pela hospedagem para usar o procedimento de recuperação descrito no guia RECUPERAR_ACESSO.md. Não apague o banco nem crie outro serviço para trocar a senha.</p>',action('close-modal','Fechar'));
    else if(name==='add-product')itemModal(id);
    else if(name==='remove-cart'){S.cart.splice(Number(id),1);$('#cart-container').innerHTML=renderCart();}
    else if(name==='checkout')await checkout(node);
    else if(name==='quick-customer')await customerModal(null,true);
    else if(name==='new-customer')await customerModal();
    else if(name==='edit-customer')await customerModal(id);
    else if(name==='select-existing-customer'){S.customers=await api('/api/customers');S.draft.customer_id=String(id);closeModal();$('#cart-container').innerHTML=renderCart();}
    else if(name==='parse-contact'){
      const form=$('#customer-form'),parsed=parseContact($('#paste-contact').value);
      for(const [key,value] of Object.entries(parsed))if(form.elements[key])form.elements[key].value=value;
      toast(Object.keys(parsed).length?'Campos preenchidos. Confira os dados antes de salvar.':'Não identifiquei campos. Preencha o nome e o telefone abaixo.',!Object.keys(parsed).length);
    }
    else if(name==='customer-orders'){const c=S.customers.find(c=>c.id===Number(id));S.orderFilters={status:'',q:'',channel:'',day:'',customer_id:id};await go('orders');}
    else if(name==='order-detail')await orderModal(id);
    else if(name==='order-next'){
      node.disabled=true;const inModal=Boolean(node.closest('dialog'));
      await api('/api/orders/'+id+'/status',{method:'POST',body:{status:node.dataset.status}});toast('Pedido atualizado.');await go('orders');if(inModal)await orderModal(id);
    }
    else if(name==='cancel-order')cancelModal(id);
    else if(name==='order-message')await messageModal(id);
    else if(name==='customer-message')await messageModal(null,id);
    else if(name==='copy-skye-pix'){await navigator.clipboard.writeText(node.dataset.pix);toast('Chave Pix copiada.');}
    else if(name==='copy-message'){await navigator.clipboard.writeText($('#message-body').value);toast('Mensagem copiada.');}
    else if(name==='print-order')await printOrder(id);
    else if(name==='orders-tab'){S.orderFilters={...S.orderFilters,status:node.dataset.status};await go('orders');}
    else if(name==='catalog-clear'){S.catalogSearch='';await go('catalog');}
    else if(name==='catalog-tab'){S.catalogTab=node.dataset.tab;await go('catalog');}
    else if(name==='edit-product')productModal(id);
    else if(name==='new-product')productModal();
    else if(name==='edit-option')optionModal(id);
    else if(name==='edit-group')groupModal(id);
    else if(name==='stock-tab'){S.stockTab=node.dataset.tab;await go('stock');}
    else if(name==='new-ingredient')ingredientModal();
    else if(name==='stock-move')stockModal(id);
    else if(name==='new-recipe'){await ensureCatalog();S.ingredients=await api('/api/ingredients');recipeModal();}
    else if(name==='delete-recipe'){await api('/api/recipes/'+id,{method:'DELETE'});S.catalog=null;await go('stock');toast('Ingrediente removido da ficha.');}
    else if(name==='finance-kind'){S.financeKind=node.dataset.kind;await go('finance');}
    else if(name==='finance-state'){S.financeState=node.dataset.state;await go('finance');}
    else if(name==='finance-month'){const d=new Date(S.financeMonth+'-01T12:00:00');d.setMonth(d.getMonth()+Number(node.dataset.delta));S.financeMonth=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;S.financeDay='';await go('finance');}
    else if(name==='finance-today'){S.financeMonth=today().slice(0,7);S.financeDay='';await go('finance');}
    else if(name==='calendar-day'){S.financeDay=node.dataset.day;S.financeMonth=S.financeDay.slice(0,7);S.financeState='';await go('finance');}
    else if(name==='finance-clear-day'){S.financeDay='';await go('finance');}
    else if(name==='new-bill')billModal();
    else if(name==='settle-bill')settleModal(id);
    else if(name==='bill-history')await billHistory(id);
    else if(name==='new-user')userModal();
    else if(name==='new-trial')userModal(true);
    else if(name==='compose-notice')await composeNotice();
    else if(name==='read-notice'){
      node.disabled=true;
      try{
        await api('/api/notices/'+id+'/read',{method:'POST',body:{}});
        void loadNoticeBanner();
        if(S.page==='notices')await go('notices');
      }finally{node.disabled=false;}
    }
    else if(name==='send-feedback')feedbackModal();
    else if(name==='close-feedback')closeFeedback();
    else if(name==='dismiss-feedback'){S.feedbackDismissed=true;$('.feedback-dock')?.remove();}
    else if(name==='back-to-login')renderLogin();
    else if(name==='activity-user'){S.activityFilters.user_id=id;S.activityOffset=0;await go('activity');}
    else if(name==='activity-page'){S.activityOffset=Number(node.dataset.offset);await go('activity');}
    else if(name==='feedback-page'){S.feedbackOffset=Number(node.dataset.offset);await go('feedback');}
    else if(name==='feedback-review')reviewFeedback(id);
    else if(name==='release-trial')releaseTrialModal(id);
    else if(name==='delete-user')deleteUserModal(id);
    else if(name==='edit-template')templateModal(id);
    else if(name==='disable-user'){
      const user=S.users.find(u=>u.id===Number(id));showModal('Desativar acesso','As sessões dessa pessoa serão encerradas.',`<form id="disable-user-form" data-form="disable-user" data-id="${id}"><p>Desativar o acesso de <strong>${e(user.name)}</strong>?</p>${formError()}</form>`,action('close-modal','Voltar')+submitButton('Desativar acesso','disable-user-form'));
    }
  }catch(err){toast(err.message,true);if(node.isConnected)node.disabled=false;}
});

document.addEventListener('input',event=>{
  const input=event.target;
  if(input.id==='product-search'){S.productSearch=input.value;$('#product-results').innerHTML=productsHTML();}
  if(input.dataset.payment){S.draft.payments[Number(input.dataset.index)][input.dataset.payment]=input.value;if($('#payment-balance'))$('#payment-balance').textContent=paymentBalance();}
  if(input.dataset.draft){S.draft[input.dataset.draft]=input.value;if($('#cart-total-value'))$('#cart-total-value').textContent=cash(cartTotal());if($('#payment-balance'))$('#payment-balance').textContent=paymentBalance();}
  if(input.closest('#item-form'))updateItemPreview();
  if(input.id==='message-body'||input.id==='demo-message-phone')updateMessageLink();
});
document.addEventListener('change',async event=>{
  const input=event.target;
  try{
    if(input.id==='weight-input-mode')updateItemPreview();
    if(input.dataset.payment){
      const part=S.draft.payments[Number(input.dataset.index)];part[input.dataset.payment]=input.value;
      if(input.dataset.payment==='method'){if(['ifood','uairango'].includes(part.method))part.status='platform';else if(part.status==='platform')part.status='pending';$('#cart-container').innerHTML=renderCart();}
      if($('#payment-balance'))$('#payment-balance').textContent=paymentBalance();
    }
    if(input.dataset.draft){
      S.draft[input.dataset.draft]=input.value;
      if(input.dataset.draft==='payment_method'){
        if(['ifood','uairango'].includes(input.value))S.draft.payment_status='platform';else if(S.draft.payment_status==='platform')S.draft.payment_status='pending';
      }
      if(['channel','fulfillment','payment_method','payment_status'].includes(input.dataset.draft))$('#cart-container').innerHTML=renderCart();
    }
    if(input.id==='message-template')await messageModal(S.message.order_id,S.message.customer_id,input.value);
    if(input.id==='stock-create-payable'||input.id==='stock-kind'){
      const form=$('#stock-form'),isEntry=form.elements.kind.value==='entrada';
      $('#create-payable-label').hidden=!isEntry;if(!isEntry)form.elements.create_payable.checked=false;
      const active=form.elements.create_payable.checked;$('#stock-payable-fields').hidden=!active;
      $$('input',$('#stock-payable-fields')).forEach(n=>{n.disabled=!active;n.required=active;});
      if(input.id==='stock-kind')$('#stock-kind-help').hidden=form.elements.kind.value!=='vitrine';
    }
  }catch(err){toast(err.message,true);}
});
$('#modal').addEventListener('click',event=>{if(event.target===$('#modal')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeModal();}});
async function boot(){
  try{S.profile=await api('/api/profile');try{const user=await api('/api/me');S.csrf=user.csrf;S.user=user;await afterLogin();}catch(err){if(!$('#trial-expired'))renderLogin();}}
  catch(err){$('#root').innerHTML=empty('O sistema ainda não respondeu',err.message,action('reload','Recarregar página','','primary','refresh'));}
}
document.addEventListener('click',event=>{if(event.target.closest('[data-action="reload"]'))location.reload();});
setInterval(async()=>{
  if(!S.user||S.page!=='orders'||$('#modal').open||document.visibilityState!=='visible'||document.activeElement?.closest('#content'))return;
  try{const html=await renderOrders();if(S.page==='orders'&&!$('#modal').open)$('#content').innerHTML=html;}catch{}
},20000);
boot();


function canSendFeedback(){return Boolean(S.user&&S.user.role!=='developer'&&!window.SkyeDemo?.enabled);}
function trialBanner(){
  return S.user?.access_mode==='trial'?`<div class="trial-banner"><div><strong>Teste de 30 dias</strong><span>Acesso até ${e(stamp(S.user.trial_expires_at))} · ${S.user.trial_days_remaining} dia(s) restante(s)</span></div><p>O uso das telas e as ações são registrados para acompanhamento pelo desenvolvedor.</p></div>`:'';
}
function feedbackDock(){
  return canSendFeedback()&&!S.feedbackDismissed?`<div class="feedback-dock"><button class="btn primary" data-action="send-feedback">${icon('message')} Enviar feedback</button><button class="btn feedback-dismiss" data-action="dismiss-feedback" aria-label="Ocultar botão de feedback">×</button></div>`:'';
}
function closeFeedback(){const modal=$('#feedback-modal');if(modal?.open)modal.close();if(modal)modal.innerHTML='';}
function feedbackModal(){
  if(!canSendFeedback())return;
  const modal=$('#feedback-modal');if(modal.open)return;
  const page=S.page,label=navItems().find(x=>x[0]===page)?.[1]||page;
  modal.innerHTML=`<div class="modal-head"><div><div class="eyebrow muted">SUA EXPERIÊNCIA</div><h2 id="feedback-title">Enviar feedback</h2><p>Conte ao desenvolvedor o que pode melhorar.</p></div><button class="modal-close" data-action="close-feedback" aria-label="Fechar feedback">×</button></div><div class="modal-body"><form id="feedback-form" data-form="feedback-send" data-page="${e(page)}" class="stack"><label class="field">Tipo de relato<select name="type">${Object.entries(feedbackTypes).map(([v,l])=>option(v,l,'ERROR')).join('')}</select></label><label class="field">O que aconteceu?<textarea name="message" rows="6" required minlength="10" maxlength="2000" placeholder="Descreva o problema, a dificuldade ou a sua sugestão."></textarea></label><p class="note-line">Página: <strong>${e(label)}</strong>. O usuário e a data são registrados automaticamente.</p>${formError()}</form></div><div class="modal-actions">${action('close-feedback','Fechar')}${submitButton('Enviar feedback','feedback-form')}</div>`;
  modal.showModal();
}
function renderTrialExpired(data){
  $('#root').innerHTML=`<section class="login-form-area" id="trial-expired" style="min-height:100vh"><div class="login-panel"><img src="/static/logo.png" width="85" alt="Operação Aurora"><div class="eyebrow muted topspace">PERÍODO DE AVALIAÇÃO</div><h2 class="topspace">Seu teste terminou</h2><p class="muted">O período de 30 dias foi encerrado${data.trial_expires_at?' em '+e(stamp(data.trial_expires_at)):''}. Entre em contato com o desenvolvedor para liberar o acesso.</p><p class="notice">Os dados cadastrados foram preservados.</p>${action('back-to-login','Voltar ao login','','primary')}</div></section>`;
}
function deleteUserModal(id){
  const user=S.users.find(u=>u.id===Number(id));
  if(!user?.can_delete||S.user.role!=='developer')return;
  showModal('Excluir usuário','O acesso será encerrado e o perfil sairá da lista.',`<form id="delete-user-form" data-form="delete-user" data-id="${id}"><p>Excluir o acesso de <strong>${e(user.name)}</strong> (${e(user.username)})?</p><p class="notice">Pedidos, movimentações, feedbacks e a autoria dos registros anteriores serão preservados. Este acesso não poderá ser reativado; um novo cadastro poderá usar o mesmo nome de usuário.</p>${formError()}</form>`,action('close-modal','Cancelar')+'<button class="btn danger" type="submit" form="delete-user-form">Excluir usuário</button>');
}
function releaseTrialModal(id){
  const user=S.users.find(u=>u.id===Number(id));
  showModal('Liberar acesso permanente','O cliente poderá continuar usando o sistema sem prazo de teste.',`<form id="release-trial-form" data-form="release-trial" data-id="${id}"><p>Liberar o acesso de <strong>${e(user.name)}</strong> (${e(user.username)})?</p><p class="note-line">As sessões atuais serão encerradas. O mesmo usuário e a mesma senha continuarão válidos no próximo login.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Liberar definitivo','release-trial-form'));
}
function supportPagination(data,name){
  return `<div class="support-pagination"><span>${data.total?`${data.offset+1}–${Math.min(data.offset+data.limit,data.total)} de ${data.total}`:'Nenhum registro'}</span><div class="support-row-actions"><button class="btn small" data-action="${name}" data-offset="${Math.max(0,data.offset-data.limit)}"${data.offset===0?' disabled':''}>Anterior</button><button class="btn small" data-action="${name}" data-offset="${data.offset+data.limit}"${data.offset+data.limit>=data.total?' disabled':''}>Próxima</button></div></div>`;
}
function supportQuery(filters,offset){const query=new URLSearchParams({limit:'50',offset:String(offset)});for(const [k,v] of Object.entries(filters))if(v)query.set(k,v);return query;}
async function renderActivity(){
  const f=S.activityFilters,data=await api('/api/activity?'+supportQuery(f,S.activityOffset));
  S.trialUsers=data.users;
  const selected=data.users.find(u=>String(u.id)===String(f.user_id));
  const filters=`<form data-form="activity-filter" class="support-filter"><label class="field">Usuário<select name="user_id">${option('','Todos os testes',f.user_id)}${data.users.map(u=>option(u.id,u.name+' ('+u.username+')'+(u.deleted_at?' · Excluído':''),f.user_id)).join('')}</select></label><label class="field">Atividade<select name="kind">${[['all','Todas'],['login','Entradas e saídas'],['pages','Telas abertas'],['changes','Ações realizadas'],['errors','Operações não concluídas']].map(([v,l])=>option(v,l,f.kind)).join('')}</select></label>${field('De','start',f.start,'','date')}${field('Até','end',f.end,'','date')}${submitButton('Filtrar')}</form>`;
  const users=data.users.filter(u=>!f.user_id||String(u.id)===String(f.user_id));
  const overview=users.length?`<div class="trial-user-grid">${users.map(u=>`<article class="panel trial-user-card"><div class="row between"><h3>${e(u.name)}</h3>${badge(u.deleted_at?'Excluído':!u.active?'Desativado':trialLabels[u.trial_status],u.active&&u.trial_status==='running'?'ready':u.trial_status==='expired'?'inactive':'pending')}</div><p class="muted small">${e(u.username)} · ${e(roleLabels[u.role])}</p><dl class="definition"><div><dt>Primeiro login do teste</dt><dd>${u.trial_started_at?e(stamp(u.trial_started_at)):'Aguardando'}</dd></div><div><dt>Fim do teste</dt><dd>${u.trial_expires_at?e(stamp(u.trial_expires_at)):'30 dias após entrar'}</dd></div><div><dt>Última atividade</dt><dd>${e(stamp(u.last_seen_at))}</dd></div><div><dt>Última tela registrada</dt><dd>${e(u.last_page||'—')}</dd></div><div><dt>Logins registrados</dt><dd>${u.login_count}</dd></div></dl>${!f.user_id?action('activity-user','Ver histórico deste usuário',u.id,'small','clock'):''}</article>`).join('')}</div>`:'';
  const records=data.events.length?`<div class="panel table-panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>Data e hora</th><th>Usuário</th><th>Atividade</th><th>Tela / referência</th></tr></thead><tbody>${data.events.map(item=>`<tr><td class="support-date">${e(stamp(item.created_at))}</td><td><strong>${e(item.user_name)}</strong><small>${e(item.username)}</small></td><td>${e(item.label)}${item.status_code?`<small>Código ${item.status_code}</small>`:''}</td><td>${e(item.page_label||({order:'Pedido',customer:'Cadastro de cliente',product:'Produto',ingredient:'Ingrediente',bill:'Conta',feedback:'Feedback',user:'Acesso',recipe:'Ficha técnica',message:'Atendimento'}[item.entity]||''))}${item.entity_id&&item.entity!=='user'?' #'+item.entity_id:''}</td></tr>`).join('')}</tbody></table></div>${supportPagination(data,'activity-page')}</div>`:empty('Nenhuma atividade neste filtro','O histórico começa quando o cliente entra e usa o sistema.','','clock');
  return heading('Acompanhamento de uso',selected?'Histórico de '+selected.name:'Acompanhe os usuários que receberam acesso de teste.',action('refresh','Atualizar','','','refresh'))+`<div class="panel space">${filters}<p class="note-line">Horários de Brasília. O acompanhamento exibe telas e ações, sem mostrar senhas, conteúdo dos cadastros ou valores financeiros. “Última atividade” indica o registro mais recente, sem afirmar que a pessoa está conectada agora.</p></div>`+overview+records;
}
async function loadNoticeBanner(){
  if(S.user?.role!=='admin'||window.SkyeDemo?.enabled)return;
  const region=$('#app-notice-banner');
  try{
    const {items}=await api('/api/notices');
    if(!region?.isConnected)return;
    const pending=items.filter(item=>!item.read_at);
    region.innerHTML=pending.length?`<div class="trial-banner" role="status"><div><strong>${pending.length===1?'Novo aviso da Skye':pending.length+' novos avisos da Skye'}</strong><button type="button" class="btn small" data-action="navigate" data-page="notices">Ver avisos</button></div></div>`:'';
  }catch{/* A consulta de avisos é independente do painel. */}
}
async function renderNotices(){
  const {items,recipients}=await api('/api/notices');
  const sending=S.user.role==='developer';
  const controls=action('refresh','Atualizar','','','refresh')+(sending&&recipients.length?action('compose-notice','Novo aviso','','primary','plus'):'');
  const cards=items.map(item=>`<article class="panel feedback-card"><div class="row between"><h2>${e(item.title)}</h2>${badge(item.read_at?'Lido':'Não lido',item.read_at?'ready':'pending')}</div><p class="muted small">${sending?'Para '+e(item.recipient)+' · ':''}${e(stamp(item.created_at))}</p><p class="feedback-message">${e(item.message)}</p>${!sending&&!item.read_at?action('read-notice','Marcar como lido',item.id,'small','check'):''}</article>`).join('');
  return heading('Avisos',sending?'Envie novidades para uma conta da loja.':'Veja as novidades enviadas pela Skye.',controls)+
    (sending&&!recipients.length?'<p class="notice">Cadastre uma conta de administrador ativa para enviar um aviso.</p>':'')+
    `<div class="feedback-list">${cards||empty(sending?'Nenhum aviso enviado':'Nenhum aviso recebido','Os avisos aparecem aqui.','','message')}</div>`;
}
async function composeNotice(){
  const {recipients}=await api('/api/notices');
  const options=option('','Selecione uma conta','')+recipients.map(user=>option(user.id,user.name+' ('+user.username+')','')).join('');
  showModal('Novo aviso','A mensagem aparecerá no painel da conta selecionada.',`<form id="notice-form" class="stack" data-form="notice-send"><label class="field">Destinatário<select name="recipient_id" required>${options}</select></label>${field('Título','title','','required maxlength="100"')}<label class="field">Mensagem<textarea name="message" rows="8" maxlength="2000" required></textarea></label>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Enviar aviso','notice-form'));
}

async function renderFeedbackInbox(){
  const f=S.feedbackFilters,data=await api('/api/feedback?'+supportQuery(f,S.feedbackOffset));S.feedbackItems=data.items;
  const stats=`<div class="tech-info">${Object.entries(feedbackStatuses).map(([key,label])=>`<div class="stat"><div class="stat-label">${e(label)}</div><div class="stat-value">${data.counts[key]||0}</div></div>`).join('')}</div>`;
  const filters=`<form data-form="feedback-filter" class="support-filter"><label class="field">Situação<select name="status">${option('ALL','Todas',f.status)}${Object.entries(feedbackStatuses).map(([v,l])=>option(v,l,f.status)).join('')}</select></label><label class="field">Tipo<select name="type">${option('ALL','Todos os tipos',f.type)}${Object.entries(feedbackTypes).map(([v,l])=>option(v,l,f.type)).join('')}</select></label><label class="field">Usuário<select name="user_id">${option('','Todos os usuários',f.user_id)}${data.users.map(u=>option(u.id,u.name+' ('+u.username+')'+(u.deleted_at?' · Excluído':''),f.user_id)).join('')}</select></label>${submitButton('Filtrar')}</form>`;
  const cards=data.items.map(item=>`<article class="panel feedback-card"><div class="row between"><div class="support-row-actions">${badge(feedbackTypes[item.type],'pending')}${badge(feedbackStatuses[item.status],item.status==='RESOLVED'?'ready':'inactive')}</div>${action('feedback-review','Atualizar análise',item.id,'small','edit')}</div><p class="muted small">#${item.id} · ${e(stamp(item.created_at))} · ${e(item.user_name)} (${e(roleLabels[item.user_role])})<br>${e(item.username)} · Página: ${e(({orders:'Pedidos','new-order':'Novo pedido',customers:'Clientes',catalog:'Cardápio',stock:'Estoque e fichas',finance:'Contas a pagar e receber',messages:'Mensagens prontas',users:'Usuários e acessos',integrations:'Integrações',settings:'Dados da loja'})[item.page]||item.page)}</p><p class="feedback-message">${e(item.message)}</p>${item.admin_notes?`<div class="notice"><strong>Observação do desenvolvedor</strong><p class="feedback-message">${e(item.admin_notes)}</p><small>Atualizado em ${e(stamp(item.updated_at))}</small></div>`:''}</article>`).join('');
  return heading('Feedbacks recebidos','Analise os relatos e acompanhe as melhorias.',action('refresh','Atualizar','','','refresh'))+stats+`<div class="panel space">${filters}</div><div class="feedback-list">${cards||empty('Nenhum feedback neste filtro','Os relatos enviados pelo botão de feedback aparecerão aqui.','','message')}</div>`+supportPagination(data,'feedback-page');
}
function reviewFeedback(id){
  const item=S.feedbackItems.find(x=>x.id===Number(id));
  showModal('Analisar feedback #'+id,item.user_name,`<form id="feedback-review-form" data-form="feedback-review" data-id="${id}" class="stack"><p class="feedback-message">${e(item.message)}</p><label class="field">Situação<select name="status">${Object.entries(feedbackStatuses).map(([v,l])=>option(v,l,item.status)).join('')}</select></label><label class="field">Observação do desenvolvedor<textarea name="admin_notes" rows="5" maxlength="2000">${e(item.admin_notes)}</textarea></label><p class="note-line">Esta observação fica no painel do desenvolvedor.</p>${formError()}</form>`,action('close-modal','Cancelar')+submitButton('Salvar análise','feedback-review-form'));
}
setInterval(async()=>{
  if(!S.user||S.user.access_mode!=='trial'||document.visibilityState!=='visible')return;
  try{const user=await api('/api/me');if(S.user&&user.id===S.user.id){Object.assign(S.user,user);const banner=$('.trial-banner');if(banner)banner.outerHTML=trialBanner();}}catch{}
},30000);
