import { Briefcase } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden">
      <div className="">
        <div className="">
          {/* Main Footer Content */}
          <div className="">
            {/*Logo brand*/}
            <div className="">
              <div className="">
                <div className="">
                  <Briefcase className="" />
                </div>
                <h3 className="">NextHire</h3>
              </div>

              <p className={`text-sm text-gray-600 max-w-md mx-auto`}>
                Connecting talented professionals with innovative companies
                worldwide. Your career success ir our mission.
              </p>
            </div>

            {/*Copyright*/}
            <div className="">
              <p className={`text-sm text-gray-600`}>
                ©️{new Date().getFullYear()} Bruno Lopes
              </p>
              <p className={`text-xs text-gray-500`}>
                Made with ❤️ by Bruno Lopes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
