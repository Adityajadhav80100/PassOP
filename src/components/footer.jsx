import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-0 w-full h-16 bg-[#86b1d8] flex items-center justify-center'>
     <section className="">

  <footer className="text-center text-white ">
    
    <div className="container p-4 pb-0">
    
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
       
    </div>
    


    <div className="text-center p-3 ">
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">PassOP.com</a>
    </div>

  </footer>

</section>
    </div>
  )
}

export default Footer
