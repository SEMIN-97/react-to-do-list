"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[652],{652:(t,e,s)=>{s.d(e,{worker:()=>l});var d=s(832),n=s(8),c=s(152);const u=[{id:1,text:"TO DO LIST\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",checked:!0},{id:2,text:"+ \ubc84\ud2bc\uc73c\ub85c \uc544\uc774\ud15c \ucd94\uac00\ud558\uae30",checked:!1},{id:3,text:"\ub2e4\ud06c/\ub77c\uc774\ud2b8 \ud14c\ub9c8 \ubcc0\uacbd",checked:!1}],a=[n.d.get("/todos",(()=>c.Z.json(u))),n.d.post("/todos",(async t=>{let{request:e}=t;const s=await e.json(),d=Math.max(...u.map((t=>t.id)))+1;return u.unshift({id:d,text:s.text,checked:!1}),new c.Z(null,{status:201})})),n.d.patch("/todos/:id",(async t=>{let{params:e,request:s}=t;const d=await s.json(),n=u.find((t=>{let{id:s}=t;return s===Number(e.id)}));return n?(n.checked=d.checked,new c.Z(null,{status:204})):new c.Z(null,{status:404})})),n.d.delete("/todos/:id",(async t=>{let{params:e}=t;const s=u.findIndex((t=>{let{id:s}=t;return s===Number(e.id)}));return 0>s?new c.Z(null,{status:404}):(u.splice(s,1),new c.Z(null,{status:200}))}))],l=(0,d.L)(...a)}}]);
//# sourceMappingURL=652.816f940c.chunk.js.map