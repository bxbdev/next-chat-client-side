(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9767:function(e,s,t){Promise.resolve().then(t.bind(t,7151))},7151:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var n=t(7437),r=t(3388),a=t(2265);function c(){let[e,s]=(0,a.useState)(""),[t,c]=(0,a.useState)(""),[i,o]=(0,a.useState)([]),[l,d]=(0,a.useState)(!1),m=(0,r.ZP)("https://server.seekdecor.online/");return(0,a.useEffect)(()=>{m.on("receive_message",e=>{console.log(e),o(s=>[...s,{userId:e.userId,message:e.message}])}),m.on("connect_error",e=>{console.error("connection error",e),m.disconnect()})},[]),(0,n.jsxs)("main",{className:"grid place-center py-10",children:[(0,n.jsx)("h2",{className:"text-2xl text-center",children:l?"room ".concat(t," "):"Enter a room number"}),(0,n.jsxs)("div",{className:"grid gap-3 max-w-3xl m-auto py-5",children:[l&&(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{className:"border border-gray-500 p-4",type:"text",value:e,onChange:e=>s(e.target.value)}),(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{s(""),o(s=>[...s,{userId:m.id,message:e}]),m.emit("send_message",{room:t,userId:m.id,message:e})},children:"Send Message"})]}),(0,n.jsx)("div",{className:"flex",children:l?(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{d(!1),c(""),o(""),s(""),m.emit("leave_room",t),m.emit("send_message",{room:t,userId:"system",message:"".concat(m.id," left")})},children:"Leave Room"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"border border-gray-500 p-4",type:"text",value:t,onChange:e=>c(e.target.value)}),(0,n.jsx)("button",{className:"bg-blue-600 text-white py-2 px-5",onClick:()=>{let e="welcome ".concat(m.id," joined");m.emit("join_room",t),m.emit("send_message",{room:t,userId:"system",message:e}),d(!0),o(s=>[...s,{userId:"system",message:e}])},children:"Join Room"})]})})]}),(0,n.jsx)("div",{className:"message p-10",children:l&&i.map((e,s)=>{let{userId:t,message:r}=e;return(0,n.jsx)("div",{className:"flex",children:"system"===t?(0,n.jsx)("div",{children:r}):(0,n.jsxs)("div",{children:[t,": ",r]})},s)})})]})}}},function(e){e.O(0,[506,971,596,744],function(){return e(e.s=9767)}),_N_E=e.O()}]);