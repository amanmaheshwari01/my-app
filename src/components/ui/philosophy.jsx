export default function Philosophy({index, data}) {
  const value = (index%2) !== 0;

  return (
    value?(
      <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-auto py-10 lg:py-20 max-w-7xl">
        <div>
        <img className = "h-auto w-auto rounded-4xl" src ={data?.image || `/gynec.jpg`} />
        </div>
        <div className="flex flex-col m-4 p-3 gap-7 pt-0">
            <h1 className="text-7xl text-warm-cream">{ data?.title ||  "Our Philosophy"}</h1>
            <p className="text-xl">{ data?.description || `We believe that every stage of a woman’s life deserves specialized, 
               attentive care—from adolescence to motherhood and beyond. Our philosophy 
               is rooted in listening first, understanding deeply, and treating each patient
               as an individual, not just a condition.
               We are committed to combining clinical excellence with genuine compassion, 
               ensuring that every woman feels safe, heard, and supported in her healthcare 
               journey. By promoting education, early detection, and preventive practices, 
               we aim to empower women to make confident, informed decisions about their bodies 
               and their future.`}
            </p>
        </div>
      </div>
      </>
      ):
      <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-auto py-10 lg:py-20 max-w-7xl">
        <div className="flex flex-col m-4 p-3 gap-7">
            <h1 className="text-7xl text-warm-cream">{ data?.title ||  "Our Philosophy"}</h1>
            <p className="text-xl">{ data?.description || `We believe that every stage of a woman’s life deserves specialized, 
               attentive care—from adolescence to motherhood and beyond. Our philosophy 
               is rooted in listening first, understanding deeply, and treating each patient
               as an individual, not just a condition.
               We are committed to combining clinical excellence with genuine compassion, 
               ensuring that every woman feels safe, heard, and supported in her healthcare 
               journey. By promoting education, early detection, and preventive practices, 
               we aim to empower women to make confident, informed decisions about their bodies 
               and their future.`}
            </p>
        </div>
        <div>
        <img className = "h-auto w-auto rounded-4xl" src ={data?.image || `/gynec.jpg`} />
        </div>
      </div>
      </>
  )
}
