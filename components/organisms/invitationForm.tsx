const InvitationForm = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="text-5xl">
          SAVE
          <br />
          THE DATE!
        </div>
      </div>
      <div className="mb-3">
        <p>お手数ではございますが</p>
        <p>3月25日までに出席のお返事賜りますようお願い申し上げます</p>
      </div>
      <div className="mb-3">
        <div className="flex justify-around my-9">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="w-4 h-4 border border-black"></div>
              <input id="radio" type="radio" className="hidden" />
            </div>
            <span className="ml-3 text-xl">ご出席</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="w-4 h-4 border border-black"></div>
              <input id="radio" type="radio" className="hidden" />
            </div>
            <span className="ml-3 text-xl">ご欠席</span>
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3">招待元</div>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <div className="w-4 h-4 border border-black"></div>
            <input id="radio" type="radio" className="hidden" />
          </div>
          <span className="ml-3">牧野 孝史</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <div className="w-4 h-4 border border-black"></div>
            <input id="radio" type="radio" className="hidden" />
          </div>
          <span className="ml-3">鵜川 恵理子</span>
        </label>

        <div></div>
      </div>
      <div className="mb-3">
        <div className="mb-3">お名前</div>
        <div className="flex">
          <input
            type="text"
            placeholder="性"
            className="w-full border border-black px-4 mr-2"
          />
          <input
            type="text"
            placeholder="名"
            className="w-full border border-black p-3 ml-2"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3">ふりがな</div>
        <div className="flex">
          <input
            type="text"
            placeholder="せい"
            className="w-full border border-black px-4 mr-2"
          />
          <input
            type="text"
            placeholder="めい"
            className="w-full border border-black p-3 ml-2"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3">郵便番号</div>
        <input
          type="text"
          placeholder="111-1111の形式でご入力ください"
          className="w-full border border-black p-3"
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">ご住所</div>
        <input
          type="text"
          placeholder="神奈川県横浜市都筑区●●-●● ドットマンション101"
          className="w-full border border-black p-3"
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">お電話番号</div>
        <input
          type="text"
          placeholder="1111-111-111の形式でご入力ください"
          className="w-full border border-black p-3"
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">アレルギー等</div>
        <textarea
          placeholder="アレルギーやその他注意事項がございましたらご入力ください"
          className="w-full border border-black p-3"
        />
      </div>
      <div className="w-full">
        <button className="w-full p-3 bg-[#EDE9D0]">
          上記の内容で送信する
        </button>
      </div>
    </div>
  );
};

export default InvitationForm;
