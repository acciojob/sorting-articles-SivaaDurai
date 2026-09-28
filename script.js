const bands= ['The Plot in You', 'The Devil Wears Prada',
   'Pierce the Veil', 'Norma Jean', 'The Bled', 
   'Say Anything', 'The Midway State', 'We Came as Romans',
   'Counterparts', 'Oh, Sleeper','A Skylit Drive', 
   'Anywhere But Here', 'An Old Dog'];
bands.sort(
  (a,b)=>
    {
      let A=a.replace(/^(a|an|the)i, "");
      let B=b.replace(/^(a|an|the)i, "");
      return A.localeCompare(B);
    }
);
let ul=document.getElementById("band");
bands.forEach(band=>
	{
		let li=document.createElement("li")
		li.textContent=band;
		ul.appendChild(li);
	});