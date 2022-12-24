const Button = ({ className, disabled, text }) => (
  <button
    className={`py-2 px-3 rounded-md font-noto text-sm lg:text-base font-medium leading-5 w-min cursor-pointer focus:outline-none ${className}`}
    disabled={disabled}>
    {text ? text : 'Default'}
  </button>
);
const Paragraph = ({ text, className }) => (
  <p className={`font-ubuntu text-[0.7rem] lg:text-sm ${className}`}>{text}</p>
);
const Anchor = ({ text, link, className }) => (
  <a href={link} className={className}>
    {text}
  </a>
);

const List = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid'];
const ModifiedList = () =>
  List.map((item) => {
    return (
      <li
        key={item}
        className={
          item === 'Inputs' ? 'text-[#090F31] font-bold' : 'text-[#9E9E9E]'
        }>
        {item}
      </li>
    );
  });
function App() {
  const OpenMenu = () => {
    const menu = document.querySelector('.menu');
    const button = document.querySelector('.menu-button');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      return (button.textContent = 'close');
    }
    menu.classList.add('hidden');
    return (button.textContent = 'menu');
  };
  return (
    <main className="bg-[#ffffff] md:h-screen lg:h-auto px-2 md:px-0">
      <div className="flex flex-col md:flex-row md:h-full relative">
        <span
          className="material-icons self-end text-3xl cursor-pointer md:hidden menu-button"
          onClick={() => OpenMenu()}>
          menu
        </span>
        <aside className="bg-[hsl(220,43%,99%)] py-6 px-10 absolute hidden md:block right-0 top-10 md:relative md:top-auto  md:left-auto menu">
          <nav className="flex flex-col gap-10 ">
            <Anchor
              text={'challenges.io'}
              link={'https://devchallenges.io/'}
              className={
                'before:content-["Dev"] before:text-[#F7542E] text-[#090f31] font-poppins text-sm font-semibold leading-5'
              }
            />
            <ul className=" font-noto text-sm font-medium leading-5 flex flex-col gap-7">
              <ModifiedList />
            </ul>
          </nav>
        </aside>
        {/* Buttons */}
        <article className="md:mt-8 lg:mt-10 md:px-4 lg:px-10 w-full">
          <p className="text-2xl font-poppins font-medium tracking-wider text-[#4F4F4F] mb-6 text-center md:text-start">
            Buttons
          </p>
          <div className="flex flex-col">
            {/* first 3 buttons */}
            <div className="flex mx-4 gap-10 md:gap-32">
              {/* left row */}
              <div className="flex flex-col gap-6">
                {/* B1 */}
                <div className="flex flex-col gap-2">
                  <Paragraph text={'<Button />'} className={'text-[#333333]'} />
                  <Button
                    className={'bg-[#E0E0E0] text-[#3F3F3F]'}
                    disabled={'false'}
                  />
                </div>
                {/* B2 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'<Button variant=”outline” />'}
                    className={'text-[#333333]'}
                  />
                  <Button
                    className="outline outline-1 outline-[#3D5AFE]  text-[#3D5AFE]"
                    disabled={'false'}
                  />
                </div>
                {/* B3 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'<Button variant=”text” />'}
                    className={'text-[#333333]'}
                  />
                  <Button className={'text-[#3D5AFE]'} disabled={'false'} />
                </div>
                {/* B4 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'<Button disableShadow />'}
                    className={'text-[#333333]'}
                  />
                  <Button
                    className={'bg-[#3D5AFE] text-[#ffffff]'}
                    disabled={'false'}
                  />
                </div>
                {/* B5 */}
                <div className="flex flex-col gap-2 flex-1">
                  <Paragraph
                    text={'<Button disabled />'}
                    className={'text-[#333333] '}
                  />
                  <Button className={'bg-[#E0E0E0] text-[#9E9E9E]'} />
                </div>
              </div>
              {/* right row */}
              <div className="flex flex-col gap-6 flex-1 md:flex-none">
                {/* B1 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'&:hover, &:focus'}
                    className={'text-[#828282]'}
                  />
                  <Button className="bg-[#E0E0E0] text-[#3F3F3F] hover:shadow-button hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]" />
                </div>
                {/* B2 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'&:hover, &:focus'}
                    className={'text-[#828282]'}
                  />
                  <Button className="outline outline-1 focus:outline-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962ff1a] hover:shadow-button focus:outline-1 focus:bg-[#2962ff1a]" />
                </div>
                {/* B3 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'&:hover, &:focus'}
                    className={'text-[#828282]'}
                  />
                  <Button className="text-[#3D5AFE] hover:bg-[#2962ff1a] hover:shadow-button focus:bg-[#2962ff1a] focus:shadow-button" />
                </div>
                {/* B5 -inv*/}
                <div className="flex justify-between flex-wrap gap-32  bg-indigo-500 invisible">
                  <div className="flex flex-col gap-2">
                    <Paragraph
                      text={'<Button variant=”text” disabled />'}
                      className={'text-[#333333] '}
                    />
                    <Button className={'bg-[#E0E0E0] text-[#9E9E9E]'} />
                  </div>
                </div>
                {/* B5 */}
                <div className="flex justify-between flex-wrap gap-32 -mt-8 md:mt-0 ">
                  <div className="flex flex-col gap-2">
                    <Paragraph
                      text={'<Button variant=”text” disabled />'}
                      className={'text-[#333333] '}
                    />
                    <Button className={'bg-[#E0E0E0] text-[#9E9E9E]'} />
                  </div>
                </div>
              </div>
            </div>
            {/* rest of buttons */}
            <div className="flex flex-col mt-6 mx-4 gap-6">
              {/* B6 */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-14 lg:gap-24 ">
                {/* B6-1 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'<Button startIcon=”local_grocery_store” />'}
                    className={'text-[#333333] '}
                  />
                  {/* icon button =IB */}
                  {/* IB 1 */}
                  <div className="flex bg-[#2962FF] w-min rounded-md justify-around px-2 shadow-button items-center gap-1">
                    <span className="material-icons text-lg text-white">
                      add_shopping_cart
                    </span>
                    <Button className={'text-[#ffffff] px-0'} />
                  </div>
                </div>
                {/* B6-2 */}
                <div className="flex flex-col gap-2">
                  <Paragraph
                    text={'<Button endIcon=”local_grocery_store” />'}
                    className={'text-[#333333]'}
                  />
                  {/* IB 2 */}
                  <div className="flex flex-row-reverse bg-[#2962FF] w-min rounded-md justify-around px-2 shadow-button items-center gap-1">
                    <span className="material-icons text-lg text-white">
                      add_shopping_cart
                    </span>
                    <Button className={'text-[#ffffff] px-0'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* last 3 rows */}
          <div className="flex flex-col gap-y-6 w-full mx-4 mt-6">
            <table className="">
              <tbody>
                <tr className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-6">
                  <td>
                    {/* b1 */}
                    <div className="flex flex-col gap-2 place-self-start">
                      <Paragraph text={'<Button size=”sm” />'} />
                      <Button
                        className={' bg-[#2962FF] text-white py-1 px-2'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b2 */}
                    <div className="flex flex-col gap-2">
                      <Paragraph text={'<Button size=”md” />'} />
                      <Button
                        className={' bg-[#2962FF] text-white px-3 py-2'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b3 */}
                    <div className="flex flex-col gap-2 place-self-start md:place-self-auto">
                      <Paragraph text={'<Button size=”lg” />'} />
                      <Button
                        className={' bg-[#2962FF] text-white px-4 py-3'}
                      />
                    </div>
                  </td>
                  <td className="md:hidden invisible lg:block">a</td>
                  <td>
                    {/* b4 */}
                    <div className="flex flex-col gap-2 place-self-start">
                      <Paragraph text={'<Button color=”default” />'} />
                      <Button
                        className={'bg-[#E0E0E0] text-[#3F3F3F] shadow-button'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b5 */}
                    <div className="flex flex-col gap-2">
                      <Paragraph text={'<Button color=”primary” />'} />
                      <Button
                        className={'bg-[#2962FF] text-white shadow-button'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b6 */}
                    <div className="flex flex-col gap-2">
                      <Paragraph text={'<Button color=”secondary” />'} />
                      <Button
                        className={'bg-[#455A64] text-white px-5 shadow-button'}
                        text={'Secondary'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b7 */}
                    <div className="flex flex-col gap-2">
                      <Paragraph text={'<Button color=”danger” />'} />
                      <Button
                        className={'bg-[#D32F2F] text-white shadow-button'}
                        text={'Danger'}
                      />
                    </div>
                  </td>
                  <td className="md:invisible md:block hidden lg:hidden"></td>
                  <td className="md:invisible md:block hidden lg:hidden"></td>
                  <td>
                    {/* b8 */}
                    <div className="flex flex-col gap-2 place-self-start">
                      <Paragraph
                        text={'&:hover, &:focus'}
                        className={'text-[#828282]'}
                      />
                      <Button className="bg-[#E0E0E0] text-[#3F3F3F] shadow-button hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]" />
                    </div>
                  </td>
                  <td>
                    {/* b9 */}
                    <div className="flex flex-col gap-2 place-self-start h-full justify-end">
                      <Button className="bg-[#2962FF] text-[#ffffff] shadow-button hover:bg-[#0039CB] focus:bg-[#0039CB]" />
                    </div>
                  </td>
                  <td>
                    {/* b10 */}
                    <div className="flex flex-col gap-2 place-self-start h-full justify-end">
                      <Button
                        className="bg-[#455A64] px-5 text-[#ffffff] shadow-button hover:bg-[#1C313A] focus:bg-[#1C313A]"
                        text={'Secondary'}
                      />
                    </div>
                  </td>
                  <td>
                    {/* b11 */}
                    <div className="flex flex-col gap-2 place-self-start h-full justify-end">
                      <Button
                        className="bg-[#D32F2F] text-[#ffffff] shadow-button hover:bg-[#9A0007] focus:bg-[#9A0007]"
                        text={'Danger'}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* footer */}
            <div className="flex flex-col gap-4 py-4 my-4 text-[#828282] text-base">
              <Anchor
                text={'Icons: https://material.io/resources/icons/?style=round'}
                link={'https://material.io/resources/icons/?style=round'}
              />
              <p>
                created by{' '}
                <Anchor
                  text={'Zerebel'}
                  link={'https://github.com/Zerebel'}
                  className={'font-bold'}
                />{' '}
                - devChallenges.io
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default App;
