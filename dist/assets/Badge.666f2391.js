import{j as i}from"./main.9a4c9a70.js";const b=({className:r="relative",name:t,color:u="blue",href:n})=>{const g=(e=!0)=>{switch(u){case"pink":return`text-pink-800 bg-pink-100 ${e?"hover:bg-pink-800":""}`;case"red":return`text-red-800 bg-red-100 ${e?"hover:bg-red-800":""}`;case"gray":return`text-gray-800 bg-gray-100 ${e?"hover:bg-gray-800":""}`;case"green":return`text-green-800 bg-green-100 ${e?"hover:bg-green-800":""}`;case"purple":return`text-purple-800 bg-purple-100 ${e?"hover:bg-purple-800":""}`;case"indigo":return`text-indigo-800 bg-indigo-100 ${e?"hover:bg-indigo-800":""}`;case"yellow":return`text-yellow-800 bg-yellow-100 ${e?"hover:bg-yellow-800":""}`;case"blue":return`text-blue-800 bg-blue-100 ${e?"hover:bg-blue-800":""}`;default:return`text-pink-800 bg-pink-100 ${e?"hover:bg-pink-800":""}`}},l="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+r;return n?i("a",{href:n||"",className:`transition-colors hover:text-white duration-300 ${l} ${g()}`,children:t}):i("span",{className:`${l} ${g(!1)} ${r}`,children:t})};export{b as B};