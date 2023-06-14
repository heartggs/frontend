export default function Cart() {
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-10">장바구니</h3>
      <div className="flex flex-col my-4 sm:flex-row sm:items-center">
        <div className="flex order-last sm:order-none sm:items-center sm:grow">
          <figure className="w-20 flex-shrink-0 rounded-2xl overflow-hidden px-2 py-2 bg-white border mr-2">
            <img src="" alt="" className="object-contain w-full h-20" />
          </figure>
          <div className="flex flex-col sm:flex-row sm:items-center sm:grow">
            <p className="line-clamp-1 text-left min-w-0 font-semibold sm:grow sm:w-96">
              모자입니다.
            </p>
            <div className="join join-horizontal order-last flex-grow-0 sm:ml-10 sm:order-none">
              <button className="btn join-item hover:bg-slate-600 hover:text-white">
                +
              </button>
              <button className="btn join-item">1</button>
              <button className="btn join-item hover:bg-slate-600 hover:text-white">
                -
              </button>
            </div>
            <span className="flex-grow-0 w-20 text-left text-gray-500 mb-4 sm:ml-2 sm:mb-0 sm:text-center">
              9999원
            </span>
          </div>
        </div>
        <button className="flex-grow-0 ml-auto mb-4 text-gray-300 sm:ml-5 sm:mb-0">
          X
        </button>
      </div>

      <div className="bg-slate-300 flex items-center justify-between p-3 rounded-md mt-14">
        <p className="text-base">결제금액</p>
        <p className="text-2xl">9999원</p>
      </div>
    </div>
  );
}
