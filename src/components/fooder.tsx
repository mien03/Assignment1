const Fooder = () => {
    return (
        <footer className="border-2	flex justify-around	h-40  place-items-center mt-30 ">
        <div className=""><a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            </div>
        <div className="flex justify-around   gap-40">
          <div>
            <div className="font-semibold	">Solutions</div>
            <div className="mt-3">Marketing</div>
            <div>Analytics</div>
            <div>Commerce</div>
            <div>Insights</div>
          </div>
          <div>
            <div className="font-semibold	">Support</div>
            <div className="mt-3">Pricing</div>
            <div>Documentation</div>
            <div>Guides</div>
            <div>API Status</div>
          </div>
          <div>
            <div className="font-semibold	">Compary</div>
            <div className="mt-3">About</div>
            <div>Blog</div>
            <div>Jobs</div>
            <div>Press</div>
            <div>partners</div>
          </div>
          <div>
            <div className="font-semibold	">Legal</div>
            <div className="mt-3">laim</div>
            <div>privacy</div>
            <div>Terms</div>
          </div>
          
        </div>
      </footer>

    )
}

export default Fooder;