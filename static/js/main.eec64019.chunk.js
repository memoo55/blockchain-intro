(this.webpackJsonpblockchain_view=this.webpackJsonpblockchain_view||[]).push([[0],{20:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return b}));var n=t(72),c=t.n(n),r=t(23);function i(){return new(0,c.a.ec)("secp256k1")}function o(){var e=i().genKeyPair();return{publicKey:e.getPublic("hex"),privateKey:e.getPrivate("hex")}}function s(a,t){var n=i(),c=Object(r.b)(t),o=n.keyFromPrivate(a).sign(c).toDER();return e(o).toString("hex")}function b(e){var a=e.publicKey,t=e.data,n=e.signature,c=i(),o=Object(r.b)(t);try{return c.keyFromPublic(a,"hex").verify(o,n)}catch(s){return console.log("Invalid Signature"),!1}}}).call(this,t(22).Buffer)},213:function(e,a,t){},217:function(e,a){},219:function(e,a){},229:function(e,a){},23:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return o}));var n=t(186),c=t.n(n);function r(e){var a=c.a.createHash("sha256");return a.update(e),a.digest("hex")}function i(e){var a=e.blockNumber,t=e.nonce,n=e.data,c=e.previousHash;return r(JSON.stringify({blockNumber:a,nonce:t,data:n,previousHash:c}))}function o(e){return r(JSON.stringify(e))}},231:function(e,a){},258:function(e,a){},260:function(e,a){},261:function(e,a){},266:function(e,a){},268:function(e,a){},287:function(e,a){},299:function(e,a){},302:function(e,a){},313:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(57),r=t.n(c),i=t(189),o=t(18),s=(t(213),t(3)),b=t(341),u=t(327),l=t(323),j=t(325),h=t(326),d=t(324),O=t(329),x=t(23);function m(e){var a,t=e.blockNumber,n=e.data,c=e.previousHash,r=0;do{r++,a=Object(x.a)({blockNumber:t,nonce:r,data:n,previousHash:c})}while(a.substring(0,4)!=="0".repeat(4));return{hashedData:a,nonce:r}}var f=t(1);var v=function(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),o=i[0],v=i[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),k=p[0],y=p[1],S=Object(n.useState)(),C=Object(s.a)(S,2),N=C[0],w=C[1],H=Object(n.useState)(!1),K=Object(s.a)(H,2),V=K[0],W=K[1];return Object(n.useEffect)((function(){var e=Object(x.a)({blockNumber:t,nonce:o,data:k}),a=e.substring(0,4)==="0".repeat(4);W(a),w(e)}),[t,o,k]),Object(f.jsxs)(l.a,{maxW:"80%",mt:"6",children:[Object(f.jsx)(d.a,{mb:"10",children:"Block"}),Object(f.jsxs)(j.a,{bg:V?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Block Number:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:t,onChange:function(e){c(Number(e.target.value))}}),Object(f.jsx)(h.a,{children:"nonce:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:o,onChange:function(e){v(Number(e.target.value))}}),Object(f.jsx)(h.a,{children:"Data:"}),Object(f.jsx)(O.a,{bg:"white",mb:"2",onChange:function(e){y(e.target.value)}}),Object(f.jsx)(h.a,{children:"Hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:N}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=m({blockNumber:t,data:k}),a=e.hashedData,n=e.nonce;v(n),w(a)},children:"Mine"})]})]})},g=t(12),p=t(330),k=t(33);var y=function(e){var a=e.blockNumber,t=e.nonce,c=e.data,r=e.previousHash,i=e.hash,o=e.updateChainValue,d=e.node,v=Object(n.useState)(!1),g=Object(s.a)(v,2),p=g[0],k=g[1];return Object(n.useEffect)((function(){var e=Object(x.a)({blockNumber:a,nonce:t,data:c,previousHash:r}),n=e.substring(0,4)==="0".repeat(4);k(n),o(a,"hash",e,d)}),[a,t,c,r]),Object(f.jsx)(l.a,{maxW:"80%",my:"6",minW:"500",children:Object(f.jsxs)(j.a,{bg:p?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Block Number:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:a}),Object(f.jsx)(h.a,{children:"nonce:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:t,onChange:function(e){o(a,"nonce",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Data:"}),Object(f.jsx)(O.a,{bg:"white",mb:"2",onChange:function(e){o(a,"data",e.target.value,d)},value:c}),Object(f.jsx)(h.a,{children:"Previous hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:r,onChange:function(e){o(a,"previousHash",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:i}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=m({blockNumber:a,data:c,previousHash:r}),t=e.hashedData,n=e.nonce;o(a,"nonce",n,d),o(a,"hash",t,d)},children:"Mine"})]})})};var S=function(){var e=Object(k.a)([{blockNumber:0,nonce:19204,data:"Genesis Block",previousHash:"0".repeat(64),hash:"000"},{blockNumber:1,nonce:34402,data:"Another block",previousHash:"",hash:"123"},{blockNumber:2,nonce:25790,data:"Final block",previousHash:"",hash:"123"}]),a=Object(s.a)(e,2),t=a[0],n=a[1];function c(e,a,t){n((function(n){n[e][a]=t}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{mb:"10",mt:"10",children:"Blockchain"}),Object(f.jsx)(p.a,{maxW:"100%",overflowX:"scroll",templateColumns:"repeat(5, 1fr)",children:t.map((function(e){if(0===e.blockNumber)return Object(f.jsx)(y,Object(g.a)(Object(g.a)({},e),{},{updateChainValue:c}));var a=t[e.blockNumber-1].hash;return Object(f.jsx)(y,Object(g.a)(Object(g.a)({},e),{},{previousHash:a,updateChainValue:c}))}))})]})};var C=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(k.a)([[{blockNumber:0,nonce:19204,data:"Genesis Block",previousHash:"0".repeat(64),hash:"000",validChain:!0},{blockNumber:1,nonce:34402,data:"Another block",previousHash:"",hash:"123",validChain:!0},{blockNumber:2,nonce:25790,data:"Final block",previousHash:"",hash:"123",validChain:!0}],[{blockNumber:0,nonce:19204,data:"Genesis Block",previousHash:"0".repeat(64),hash:"000",validChain:!0},{blockNumber:1,nonce:34402,data:"Another block",previousHash:"",hash:"123",validChain:!0},{blockNumber:2,nonce:25790,data:"Final block",previousHash:"",hash:"123",validChain:!0}],[{blockNumber:0,nonce:19204,data:"Genesis Block",previousHash:"0".repeat(64),hash:"000",validChain:!0},{blockNumber:1,nonce:34402,data:"Another block",previousHash:"",hash:"123",validChain:!0},{blockNumber:2,nonce:25790,data:"Final block",previousHash:"",hash:"123",validChain:!0}]]),i=Object(s.a)(r,2),o=i[0],b=i[1];function u(e,a,t,n){b((function(c){c[n][e][a]=t})),"hash"===a&&e===o[n].length-1&&c((function(e){return!e}))}function l(e,a){return e.map((function(e){if(0===e.blockNumber)return Object(f.jsx)(y,Object(g.a)(Object(g.a)({},e),{},{updateChainValue:u,node:a}));var t=o[a][e.blockNumber-1].hash;return Object(f.jsx)(y,Object(g.a)(Object(g.a)({},e),{},{previousHash:t,updateChainValue:u,node:a}))}))}return Object(n.useEffect)((function(){var e=o[0].length-1,a=o.reduce((function(a,t){return a[t[e].hash]=(a[t[e].hash]||0)+1,a}),{}),t=Object.keys(a).reduce((function(e,t){return a[e]>a[t]?e:t}));o.map((function(a,n){var c=a[e].hash===t;b((function(a){a[n][e].validChain=c}))}))}),[t]),Object(f.jsx)(f.Fragment,{children:o.map((function(e,a){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(d.a,{my:"5",children:["Node ",a]}),Object(f.jsx)(p.a,{bg:e[e.length-1].validChain?"white":"red.500",maxW:"100%",overflowX:"scroll",templateColumns:"repeat(5, 1fr)",children:l(e,a)})]})}))})},N=t(331),w=t(333),H=t(332);var K=function(){function e(e){var a=e.children,t=e.link;return Object(f.jsx)(h.a,{mr:6,children:Object(f.jsx)(N.a,{href:t,children:a})})}return Object(f.jsxs)(H.a,{as:"nav",justify:"center",padding:"2.5",bg:"gray.800",color:"gray.100",children:[Object(f.jsx)(H.a,{align:"center",mr:5,children:Object(f.jsx)(d.a,{as:"h1",size:"lg",children:"Blockchain viewer"})}),Object(f.jsx)(w.a,{}),Object(f.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(f.jsx)(e,{link:"/blockchain-intro/sha256",children:"SHA256"}),Object(f.jsx)(e,{link:"/blockchain-intro/block",children:"Block"}),Object(f.jsx)(e,{link:"/blockchain-intro/blockchain",children:"Blockchain"}),Object(f.jsx)(e,{link:"/blockchain-intro/distributed",children:"Distributed"}),Object(f.jsx)(e,{link:"/blockchain-intro/transactions",children:"Transactions"}),Object(f.jsx)(e,{link:"/blockchain-intro/wallet",children:"Wallet"}),Object(f.jsx)(e,{link:"/blockchain-intro/signed",children:"Signed"}),Object(f.jsx)(e,{link:"/blockchain-intro/wallet-transactions",children:"Wallet-Transactions"}),Object(f.jsx)(e,{link:"/blockchain-intro/transactions-wallet",children:"Transactions with Wallet"})]})]})};var V=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),i=Object(s.a)(r,2),o=i[0],m=i[1];return Object(n.useEffect)((function(){var e=Object(x.c)(t);m(e)}),[t]),Object(f.jsxs)(l.a,{maxW:"80%",mt:"6",children:[Object(f.jsx)(d.a,{mb:"10",children:"SHA256 Hash"}),Object(f.jsxs)(j.a,{bg:"green.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Data:"}),Object(f.jsx)(O.a,{bg:"white",mb:"2",onChange:function(e){var a=e.target.value;c(a)}}),Object(f.jsx)(h.a,{children:"SHA256:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:o}),Object(f.jsx)(b.a,{colorScheme:"blue",children:"Calculate SHA256"})]})]})},W=t(336),D=t(337),T=t(338),E=t(335),R=t(334),P=t(20);var B=function(e){var a=e.updateWalletData,t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],i=c[1],o=Object(n.useState)(""),O=Object(s.a)(o,2),x=O[0],m=O[1];return Object(n.useEffect)((function(){void 0!==a&&(a("publicKey",r),a("privateKey",x))}),[r,x]),Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Wallet"}),Object(f.jsxs)(j.a,{bg:"green.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Public Key:"}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",children:Object(f.jsx)(W.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:r})]}),Object(f.jsx)(h.a,{children:"Private Key:"}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",children:Object(f.jsx)(D.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:x})]}),Object(f.jsx)(b.a,{colorScheme:"blue",rightIcon:Object(f.jsx)(T.a,{}),onClick:function(){var e=Object(P.a)(),a=e.publicKey,t=e.privateKey;console.log("publicKey: ",a),console.log("privateKey: ",t),i(a),m(t)},children:"Create Wallet"})]})]})};var F=function(e){var a=e.walletData,t=e.updateWalletData,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1];return Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Sign Transaction"}),Object(f.jsxs)(j.a,{bg:"green.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Data:"}),Object(f.jsx)(O.a,{bg:"white",mb:"2",onChange:function(e){return o(e.target.value)},value:i}),Object(f.jsx)(h.a,{children:"Private Key:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.privateKey}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=Object(P.b)(a.privateKey,i);console.log("sign",e),t("signature",e)},children:"Sign Transaction"}),Object(f.jsx)(h.a,{mt:"2",children:"Signature:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.signature})]})]})};var J=function(e){var a=e.walletData,t=e.updateWalletData,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],x=Object(n.useState)(!1),m=Object(s.a)(x,2),v=m[0],g=m[1];return Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Verify Transaction"}),Object(f.jsxs)(j.a,{bg:v?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Data:"}),Object(f.jsx)(O.a,{bg:"white",mb:"2",onChange:function(e){var a=e.target.value;o(a)}}),Object(f.jsx)(h.a,{children:"Public Key:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.publicKey,onChange:function(e){return t("publicKey",e.target.value)}}),Object(f.jsx)(h.a,{children:"Signature:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.signature,onChange:function(e){return t("signature",e.target.value)}}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=Object(P.c)({data:i,publicKey:a.publicKey,signature:a.signature});g(e)},children:"Verify Signature"})]})]})};var I=function(){var e=Object(k.a)({publicKey:"",privateKey:"",data:"",signature:"",isSignatureValid:!1}),a=Object(s.a)(e,2),t=a[0],n=a[1];function c(e,a){n((function(t){t[e]=a}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(B,{updateWalletData:c}),Object(f.jsx)(F,{walletData:t,updateWalletData:c}),Object(f.jsx)(J,{walletData:t,updateWalletData:c})]})},A=t(344),z=t(339);var G=function(e){var a=e.updateValue,t=e.transaction,n=t.amount,c=t.to,r=t.from,i=t.id;return Object(f.jsxs)(A.a,{spacing:"1",children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:"$"}),Object(f.jsx)(u.a,{placeholder:"Amount",value:n,onChange:function(e){return a(i,"amount",Number(e.target.value))}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.b,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"from",value:r,onChange:function(e){return a(i,"from",e.target.value)}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"to",value:c,onChange:function(e){return a(i,"to",e.target.value)}})]})]})};var M=function(e){var a=e.updateTransactionValue,t=e.blockNumber,n=e.transactions;function c(e,n,c){a(t,e,n,c)}return Object(f.jsx)(j.a,{bg:"white",borderRadius:"md",p:"1",children:n.map((function(e){return Object(f.jsx)(G,{transaction:e,updateValue:c})}))})};var X=function(e){var a=e.blockNumber,t=e.nonce,c=e.data,r=e.previousHash,i=e.hash,o=e.updateChainValue,d=e.node,O=e.updateTransactionValue,v=Object(n.useState)(!1),g=Object(s.a)(v,2),p=g[0],k=g[1];return Object(n.useEffect)((function(){var e=Object(x.a)({blockNumber:a,nonce:t,data:c,previousHash:r}),n=e.substring(0,4)==="0".repeat(4);k(n),o(a,"hash",e,d)}),[a,t,c,r]),Object(f.jsx)(l.a,{maxW:"80%",my:"6",minW:"500",children:Object(f.jsxs)(j.a,{bg:p?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Block Number #:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:a}),Object(f.jsx)(h.a,{children:"nonce:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:t,onChange:function(e){o(a,"nonce",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Transactions:"}),Object(f.jsx)(M,{transactions:c,blockNumber:a,updateTransactionValue:O}),Object(f.jsx)(h.a,{children:"Previous hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:r,onChange:function(e){o(a,"previousHash",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:i}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=m({blockNumber:a,data:c,previousHash:r}),t=e.hashedData,n=e.nonce;o(a,"nonce",n,d),o(a,"hash",t,d)},children:"Mine"})]})})};var $=function(){var e=Object(k.a)([{blockNumber:0,nonce:13966,data:[{id:0,amount:10,from:"me",to:"you"},{id:1,amount:5,from:"you",to:"me"},{id:2,amount:1,from:"me",to:"you"}],previousHash:"0".repeat(64),hash:"000032ac7852203819adbcafd1ae54ee51968ffafa6c5468d2e6655c4c777e1d"},{blockNumber:1,nonce:161732,data:[{id:0,amount:9,from:"Icaro",to:"Nicolas"},{id:1,amount:1,from:"Nicolas",to:"Icaro"},{id:2,amount:12,from:"me",to:"you"}],previousHash:"",hash:"0000b069cf12069fc3c27e4d2d0d7a178eb3a75df45c0e99a7a9234c77d4acce"},{blockNumber:2,nonce:7122,data:[{id:0,amount:7,from:"Rafaela",to:"Nicolas"},{id:1,amount:6,from:"Rafaela",to:"Icaro"},{id:2,amount:13,from:"me",to:"you"}],previousHash:"",hash:"0000c729ba6c40884f17e4307f808515efc18c15716f445a26780242c93665ae"}]),a=Object(s.a)(e,2),t=a[0],n=a[1];function c(e,a,c){JSON.stringify(t[e][a])!==JSON.stringify(c)&&n((function(t){t[e][a]=c}))}function r(e,a,c,r){JSON.stringify(t[e].data[a][c])!==JSON.stringify(r)&&n((function(t){t[e].data[a][c]=r}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{mb:"10",mt:"10",children:"Transactions"}),Object(f.jsx)(p.a,{maxW:"100%",overflowX:"scroll",templateColumns:"repeat(5, 1fr)",children:t.map((function(e){if(console.log(e),0===e.blockNumber)return Object(f.jsx)(X,Object(g.a)(Object(g.a)({},e),{},{updateChainValue:c,updateTransactionValue:r}));var a=t[e.blockNumber-1].hash;return Object(f.jsx)(X,Object(g.a)(Object(g.a)({},e),{},{previousHash:a,updateTransactionValue:r,updateChainValue:c}))}))})]})};var _=function(e){var a=e.updateWalletData,t=Object(n.useState)(""),c=Object(s.a)(t,2),r=c[0],i=c[1],o=Object(n.useState)(""),O=Object(s.a)(o,2),x=O[0],m=O[1];return Object(n.useEffect)((function(){a("publicKey",r),a("privateKey",x)}),[r,x]),Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Wallet"}),Object(f.jsxs)(j.a,{bg:"green.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Public Key:"}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",children:Object(f.jsx)(W.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:r})]}),Object(f.jsx)(h.a,{children:"Private Key:"}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",children:Object(f.jsx)(D.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:x})]}),Object(f.jsx)(b.a,{colorScheme:"blue",rightIcon:Object(f.jsx)(T.a,{}),onClick:function(){var e=Object(P.a)(),a=e.publicKey,t=e.privateKey;console.log("publicKey: ",a),console.log("privateKey: ",t),i(a),m(t)},children:"Create Wallet"})]})]})};var q=function(e){var a=e.updateValue,t=e.transaction,n=t.amount,c=t.to,r=t.from,i=t.id;return Object(f.jsxs)(A.a,{spacing:"1",children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:"$"}),Object(f.jsx)(u.a,{placeholder:"Amount",value:n,onChange:function(e){return a(i,"amount",Number(e.target.value))}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.b,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"from",value:r,onChange:function(e){return a(i,"from",e.target.value)}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"to",value:c,onChange:function(e){return a(i,"to",e.target.value)}})]})]})};var L=function(e){var a=e.updateTransactionValue,t=e.transactions;function n(e,t,n){a(e,t,n)}return Object(f.jsx)(j.a,{bg:"white",borderRadius:"md",p:"1",children:t.map((function(e){return Object(f.jsx)(q,{transaction:e,updateValue:n})}))})};var Q=function(e){var a=e.walletData,t=e.updateWalletData,n=e.updateTransactionValue;return Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Sign Transaction"}),Object(f.jsxs)(j.a,{bg:"green.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Transactions:"}),Object(f.jsx)(L,{transactions:a.data,updateTransactionValue:n}),Object(f.jsx)(h.a,{children:"Private Key:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.privateKey}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=Object(P.b)(a.privateKey,a.data);console.log("sign",e),t("signature",e)},children:"Sign Transaction"}),Object(f.jsx)(h.a,{mt:"2",children:"Signature:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.signature})]})]})};var U=function(e){var a=e.walletData,t=e.updateWalletData,c=e.updateTransactionValue,r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],O=i[1];return Object(f.jsxs)(l.a,{maxW:"80%",mt:"3",children:[Object(f.jsx)(d.a,{mb:"3",children:"Verify Transaction"}),Object(f.jsxs)(j.a,{bg:o?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Transactions:"}),Object(f.jsx)(L,{transactions:a.data,updateTransactionValue:c}),Object(f.jsx)(h.a,{children:"Public Key:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.publicKey,onChange:function(e){return t("publicKey",e.target.value)}}),Object(f.jsx)(h.a,{children:"Signature:"}),Object(f.jsx)(u.a,{bg:"white",mb:"2",value:a.signature,onChange:function(e){return t("signature",e.target.value)}}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=Object(P.c)({data:a.data,publicKey:a.publicKey,signature:a.signature});O(e)},children:"Verify Signature"})]})]})};var Y=function(){var e=Object(k.a)({publicKey:"",privateKey:"",data:[{amount:1,to:"you",from:"me",id:0},{amount:3,to:"me",from:"you",id:1}],signature:"",isSignatureValid:!1}),a=Object(s.a)(e,2),t=a[0],n=a[1];function c(e,a){n((function(t){t[e]=a}))}function r(e,a,c){JSON.stringify(t.data[e][a])!==JSON.stringify(c)&&n((function(t){t.data[e][a]=c}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_,{updateWalletData:c}),Object(f.jsx)(Q,{walletData:t,updateWalletData:c,updateTransactionValue:r}),Object(f.jsx)(U,{walletData:t,updateWalletData:c,updateTransactionValue:r})]})},Z=t(194),ee=t(340);var ae=function(e){var a=e.isOpen,t=(e.onOpen,e.onClose),c=e.transaction,r=e.updateValue,i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],j=o[1],h=Object(n.useRef)();return Object(f.jsxs)(ee.a,{isOpen:a,initialFocusRef:h,children:[Object(f.jsx)(ee.f,{}),Object(f.jsxs)(ee.c,{children:[Object(f.jsx)(ee.e,{children:"Sign your transaction"}),Object(f.jsx)(ee.b,{children:Object(f.jsx)(Z.a,{children:Object(f.jsx)(u.a,{onChange:function(e){return j(e.target.value)},value:l,ref:h,placeholder:"Enter your private key"})})}),Object(f.jsxs)(ee.d,{children:[Object(f.jsx)(b.a,{colorScheme:"blue",mr:"3",onClick:function(){var e=Object(g.a)({},c);delete e.signed;var a=Object(P.b)(l,e);r(c.id,"signed",a),t()},children:"Sign"}),Object(f.jsx)(b.a,{onClick:t,children:"Cancel"})]})]})]})},te=t(342);var ne=function(e){var a=e.updateValue,t=e.transaction,c=t.amount,r=t.to,i=t.from,o=t.id,l=t.signed,j=Object(te.a)(),h=j.isOpen,d=j.onOpen,O=j.onClose,x=Object(n.useState)(!1),m=Object(s.a)(x,2),v=m[0],p=m[1];return Object(n.useEffect)((function(){var e=Object(g.a)({},t);delete e.signed;var a=Object(P.c)({publicKey:i,data:e,signature:l});p(a)}),[l]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ae,{transaction:t,updateValue:a,isOpen:h,onClose:O,onOpen:d}),Object(f.jsxs)(A.b,{spacing:"0",mb:"2",children:[Object(f.jsxs)(A.a,{spacing:"1",children:[Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:"$"}),Object(f.jsx)(u.a,{placeholder:"Amount",value:c,onChange:function(e){return a(o,"amount",Number(e.target.value))}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.b,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"from",value:i,onChange:function(e){return a(o,"from",e.target.value)}})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(E.a,{pointerEvents:"none",color:"gray.300",fontSize:"1.2em",children:Object(f.jsx)(z.a,{color:"gray.300"})}),Object(f.jsx)(u.a,{placeholder:"to",value:r,onChange:function(e){return a(o,"to",e.target.value)}})]})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(b.a,{leftIcon:Object(f.jsx)(D.a,{}),onClick:d}),Object(f.jsx)(u.a,{bg:v?"green.50":"red.50",placeholder:"",value:l,onChange:function(e){return a(o,"signed",e.target.value)}})]})]})]})};var ce=function(e){var a=e.updateTransactionValue,t=e.blockNumber,n=e.transactions;function c(e,n,c){a(t,e,n,c)}return Object(f.jsx)(j.a,{bg:"white",borderRadius:"md",p:"1",children:n.map((function(e){return Object(f.jsx)(ne,{transaction:e,updateValue:c})}))})};var re=function(e){var a=e.blockNumber,t=e.nonce,c=e.data,r=e.previousHash,i=e.hash,o=e.updateChainValue,d=e.node,O=e.updateTransactionValue,v=Object(n.useState)(!1),p=Object(s.a)(v,2),k=p[0],y=p[1];return Object(n.useEffect)((function(){if(c.find((function(e){var a=Object(g.a)({},e);return delete a.signed,!Object(P.c)({publicKey:e.from,data:a,signature:e.signed})})))return y(!1);var e=Object(x.a)({blockNumber:a,nonce:t,data:c,previousHash:r}),n=e.substring(0,4)==="0".repeat(4);y(n),o(a,"hash",e,d)}),[a,t,c,r]),Object(f.jsx)(l.a,{maxW:"80%",my:"6",minW:"500",children:Object(f.jsxs)(j.a,{bg:k?"green.100":"red.100",padding:"6",borderRadius:"md",children:[Object(f.jsx)(h.a,{children:"Block Number #:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:a}),Object(f.jsx)(h.a,{children:"nonce:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:t,onChange:function(e){o(a,"nonce",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Transactions:"}),Object(f.jsx)(ce,{transactions:c,blockNumber:a,updateTransactionValue:O}),Object(f.jsx)(h.a,{children:"Previous hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:r,onChange:function(e){o(a,"previousHash",e.target.value,d)}}),Object(f.jsx)(h.a,{children:"Hash:"}),Object(f.jsx)(u.a,{bg:"white",mb:"6",value:i}),Object(f.jsx)(b.a,{colorScheme:"blue",onClick:function(){var e=m({blockNumber:a,data:c,previousHash:r}),t=e.hashedData,n=e.nonce;o(a,"nonce",n,d),o(a,"hash",t,d)},children:"Mine"})]})})};var ie=function(){var e=Object(k.a)([{blockNumber:0,nonce:13966,data:[{id:0,amount:10,from:"me",to:"you",signed:""},{id:1,amount:5,from:"you",to:"me",signed:""},{id:2,amount:1,from:"me",to:"you",signed:""}],previousHash:"0".repeat(64),hash:"000032ac7852203819adbcafd1ae54ee51968ffafa6c5468d2e6655c4c777e1d"},{blockNumber:1,nonce:161732,data:[{id:0,amount:9,from:"Icaro",to:"Nicolas"},{id:1,amount:1,from:"Nicolas",to:"Icaro"},{id:2,amount:12,from:"me",to:"you"}],previousHash:"",hash:"0000b069cf12069fc3c27e4d2d0d7a178eb3a75df45c0e99a7a9234c77d4acce"},{blockNumber:2,nonce:7122,data:[{id:0,amount:7,from:"Rafaela",to:"Nicolas"},{id:1,amount:6,from:"Rafaela",to:"Icaro"},{id:2,amount:13,from:"me",to:"you"}],previousHash:"",hash:"0000c729ba6c40884f17e4307f808515efc18c15716f445a26780242c93665ae"}]),a=Object(s.a)(e,2),t=a[0],n=a[1];function c(e,a,c){JSON.stringify(t[e][a])!==JSON.stringify(c)&&n((function(t){t[e][a]=c}))}function r(e,a,c,r){JSON.stringify(t[e].data[a][c])!==JSON.stringify(r)&&n((function(t){t[e].data[a][c]=r}))}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{mb:"10",mt:"10",children:"Transactions with Wallet"}),Object(f.jsx)(p.a,{maxW:"100%",overflowX:"scroll",templateColumns:"repeat(5, 1fr)",children:t.map((function(e){if(console.log(e),0===e.blockNumber)return Object(f.jsx)(re,Object(g.a)(Object(g.a)({},e),{},{updateChainValue:c,updateTransactionValue:r}));var a=t[e.blockNumber-1].hash;return Object(f.jsx)(re,Object(g.a)(Object(g.a)({},e),{},{previousHash:a,updateTransactionValue:r,updateChainValue:c}))}))}),Object(f.jsx)(B,{}),Object(f.jsx)(B,{})]})};var oe=function(){return Object(f.jsxs)(i.a,{basename:"/blockchain-intro",children:[Object(f.jsx)(K,{}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/sha256",children:Object(f.jsx)(V,{})}),Object(f.jsx)(o.a,{path:"/block",children:Object(f.jsx)(v,{})}),Object(f.jsx)(o.a,{path:"/blockchain",children:Object(f.jsx)(S,{})}),Object(f.jsx)(o.a,{path:"/distributed",children:Object(f.jsx)(C,{})}),Object(f.jsx)(o.a,{path:"/transactions",children:Object(f.jsx)($,{})}),Object(f.jsx)(o.a,{path:"/wallet",children:Object(f.jsx)(B,{})}),Object(f.jsx)(o.a,{path:"/signed",children:Object(f.jsx)(I,{})}),Object(f.jsx)(o.a,{path:"/wallet-transactions",children:Object(f.jsx)(Y,{})}),Object(f.jsx)(o.a,{path:"/transactions-wallet",children:Object(f.jsx)(ie,{})})]})]})},se=t(343);r.a.render(Object(f.jsx)(se.a,{children:Object(f.jsx)(oe,{})}),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.eec64019.chunk.js.map