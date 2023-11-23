
export default function Profile() {
  return (
    <>
  {/* component */}
  <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <img
      className="w-32 h-32 rounded-full mx-auto"
      src="../img/anhzalo.png"
      alt="Profile picture"
    />
    <h2 className="text-center text-2xl font-semibold mt-3">Vũ Thị Miền</h2>
    <p className="text-center text-gray-600 mt-1">web programming</p>
    <div className="flex justify-center mt-5">
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
        Twitter
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
        LinkedIn
      </a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
        GitHub
      </a>
    </div>
    <div className="mt-5">
      <h3 className="text-xl font-semibold">mien</h3>
      <p className="text-gray-600 mt-2">
        ngày sinh : 23/07/2003 <br />
        sở thích : nấu ăn 

      </p>
    </div>
  </div>
</>

  );
}
