import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 mt-20">
      <div className="grid grid-cols-1 gap-8 py-12  transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2">
              <svg width="70" height="70" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                <rect width="500" height="500" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use href="#image0_0_1" transform="scale(0.002)" />
                  </pattern>
                  <image id="image0_0_1" width="10" height="10" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAM3RFWHRDb21tZW50AHhyOmQ6REFGaUdzZEx6aTA6MyxqOjQ2NTY2NDY3NDAxLHQ6MjMwNTA2MDJhl8XSAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KICAgICAgICA8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgICAgICAgPGRjOnRpdGxlPgogICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+Qmx1ZSBCbGFjayBNaW5pbWFsaXN0IFJlYWwgRXN0YXRlIExvZ28gLSAxPC9yZGY6bGk+CiAgICAgICAgPC9yZGY6QWx0PgogICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICA8cmRmOlNlcT4KICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0wNS0wNjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD5iMjAwNzJkZC0yZTZlLTQ1ZTAtYmIwMC0xNzJjN2IxNzc1NGQ8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5FbW1hbnVlbCBUaGVuPC9wZGY6QXV0aG9yPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICAgIDwvcmRmOlJERj4KICAgICAgICA8L3g6eG1wbWV0YT51e/LDAAASdElEQVR4nOzVMQ0AMAzAsJU/6YHoMS2yEeTLHADge/M6AADYM3QACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAgwdAAIMHQACDB0AAi4AAAA///s3W2sZdVdx/FvzSRSCkHaIZCMhRYVIo0T4qwyTLuQgiE8CFIhGgiEGsig1aDFitVUXF21KlYD1he2FiEWmIBRkDq0hUh4CKsDQxcWMWDAQBUhQiGQBoITU8UX+7a93ffwMHPv2fucdb6fd+f8h7N/yYT8Zp+z11oWuiRJDbDQJUlqgIUuSVIDLHRJkhpgoUuS1AALXZKkBljokiQ1wEKXJKkBFrokSQ2w0CVJaoCFLmnVQipvA44Anqs5/vvIcaSF9ANjB5A030IqbwUeB+4HvhFS+dWRI0kLyUKXtFo/ARy47PXPjBVEWmQWuqTVWtd7/YOjpJAWXP9/REmNCalcDvwksK3meOUULvHqFD5T0m6y0KVGhVT2Af4BOG7prWNDKj9Wc/ytNb6UD9dKM8Cv3KUGhVQ2ADv5Xpl/xyUhlRtHiCRpyix0qTEhlY3AA3TLyCY5I6RyX0hl/wFjSZoyC11qSEjlFGAH3//UOcALvdebgftDKu9ag8v6G7o0Ayx0qREhlV8DvgS8rTfKwDuB23vv/yjwtZDKplVe2t/QpRlgoUsNCKl8HvjMhNHZNcdP1BxfqTmeAFzdm68HSkjl1KmHlDRVFro0x0Iqe4dUbgW29kbfAo6pOd6w/M2a4wXA7/X+7F7A9pDKR6aXVNK0WejSnAqpHAjcC5zYGz0JHFVzLJP+u5rj7wPnThhdsXSnL2kOWejSHAqpHEH3JPvG3ugBYFPN8bHX++9rjtuADwAv9UZbQyrbQyp7rVVWScOw0KU5E1I5jm6N+Ybe6BYg1hyffzOfU3O8G9gCPNUbnUr3u/r61WaVNBwLXZojIZXzgDuAfXqjy2uOp9Ucd+3O59UcHwbeCzzcG20CHgipHLrHYSUNykKX5kRI5TLgCxNGF9YcP7qnn1tzfIbuTr2/rO1goIZUNu/pZ0sajoUuzYGl7Vo/1nv7FeCktThwpeb40tKytm290f7AfSGVM1Z7DUnTZaFLMyyksj6kch/QL9RngS01x9vW8no1x3OBT0wY3RhSWetDXSStIQtdmlEhlcPonlrvf+X9CN2T7A9N47o1x8zkZW1/7LI2aXZZ6NIMCqlE4H6637GXuxPYXHN8eprXX1rWdgKTl7XdGlLZe5rXl7T7LHRpxoRUzgLuAfbrja6pOR5fc3x5iBw1x9vpHpZ7pjc6Ebh3aWMbSTPCQpdmSEglAddPGP1OzfFDQ+d5nWVtG+mWtR02dCZJk1no0owIqVzP5AfSzqw5XjZwnO+qOT7F5GVtG+h+FoiDh5K0gsceSiMLqezH0i5vvdGLwMk1x53Dp5ospHIdcM4b/LE7ao4/PUQeSd/jHbo0opDKwUy+y30CCLNU5vDdZW2fHDuHpJUsdGkkIZVNdMvS+r9D76Qr8yeGT/XGao6JycvaJI3Ir9ylEYRUzgT+bsLob2qOZw2dZ0+EVE4AbmLlvvKPAkfu7r7yklbHO3RpYEs7rk0q8z+clzIHqDn+I3A0K5e1HQ7cE1I5YPhU0uLyDl0a0NJOa1snjH6x5jjp4JWZt3Sc6x0TRt+g22v+dc9ml7Q2vEOXBhBS2Sekcgcry/xl4Ph5LfMl//0a77+bbgOaLUOGkRaVhS5NWUhlA92Dbsf1Rk/TbeN65xSvvV9I5fyQysnTusYbeDuwI6Ry+kjXlxaGhS5NUUjlSKACR/RGX6c7YOWRKUfYAVwFfDmk8kdTvtZ3THoY7uaQykUDXV9aSBa6NCUhlROBrwIH9Ua3AbHm+OyUr/8uvv8fEj83zestcx9wwYT3/zykcvlAGaSFY6FLUxBS2QrcCvRPJbuy5nhSzfGVEWINpuZ4NXAKK+/WLw6p3DxCJKl5Frq0xkIqfwZMOjf8IzXHC4fOM5aa41eAY4AXeqPTQyo7lra8lbRGLHRpjYRU9g6pbAd+vTfaBZxWc/zMCLFGVXOswFHA473RFmBnSOWQ4VNJbbLQpTWwdDb4vcCpvdHzdL+X3zJ8qtlQc3ycrtRrb3Q48LWlBwclrZKFLq1SSOUIuj3ZN/ZGj9E9yf7A8KlmS83xBbqv37/SGx0AfHXEZXVSMyx0aRWWdknbSXc2+HIFOKrm+OTwqWZTzXFXzfEU4LO90d50y+rOHyGW1AwLXdpDIZXz6LY87R9OckPN8Zia47dGiDXzao6/AnxswuiqkMqnhs4jtcJCl/bA0iYtk7ZrvbTmePbQeeZNzfHTwC9MGH08pHLd0HmkFljo0m4KqdwI/PaE0dk1R+8w36Sa498CHwD632ScE1K5K6Sy7/CppPlloUtvUkhl/5DKfcAZvdGLwNE1xxtGiDXXao53A5uBp3qjY+kOdunvsifpNVjo0psQUjmUbtnV5t7oCSDUHHcOn6oNNcdHgfcCD/dG76Fb1vae4VNJ88dCl95ASCXSlfmhvdFOujJ/YvhUbak5PkO32cztvdEP092pHzt8Kmm+WOjS6wipnAXcA+zfG91Uczy65vjiCLGaVHN8qeZ4ArCtN9oXuCukcs4IsaS5YaFLryGkcilw/YTRp2uOZ67B5x8UUvnlkMpPrfazWlJzPBeY9HDhdSGVjw+dR5oXFro0QUjleuCTE0YfqjlOWkO9u5//VuBf6DZZuTuk8kur/cyW1BwvZfIRrJ8KqVw1dB5pHljo0jIhlf1CKvcAZ/VGLwPH1xyvWaNLbQbWL3s91Fnlc2PZEaz9o2bPD6l8OaTSP5pWWmgWurQkpHIwcD8Qe6Ongc01xzuHT7XYlo5gfT/wXG90Mt0e8AcMn0qaTRa6BIRUNtEdsHJYb/QQ3QErjwyfSgA1xwfplrX1j2A9km5Z2+HDp5Jmj4WuhRdSOZXuMJX1vdFtwJaa47PDp9JyNcf/oDuC9d7e6BC6c9W3DJ9Kmi0WuhZaSOU3ge3AXr3RlTXHk2qO/d9vNZKa4ws1x/cBX+yN9gN2hFROHyGWNDMsdC2skMrngT+ZMLqk5njh0Hn05tQcP8jKI1gBbg6pXDx0HmlWWOhaOCGVfUIqdwBbe6NdwGk1xz8dIZZ2w9IRrB+dMLo8pPIXQ+eRZoGFroUSUtlAt2Xrcb3R80CsOd4yfCrtiZrj5cAHJ4w+HFK5eeg80tgsdC2MkMpGuifZj+iNHqN7kv2B4VNpNWqOXwTex8ojWE8PqewIqbx9hFjSKCx0LYSQyol0T0gf2BsV4Kia45PDp9JaqDney+QjWLcA94dUDhk+lTQ8C13NC6n8PHAr0N9Z7Nqa4zE1x/7dnVbnLUNfcOkI1k3Ag73Rj9Ata/uhoTNJQ7PQtQgumvDeH9Qczxs8iaam5vhNul3lbuuNDsStdbUALHQtgn/uvT6v5vi7oyTRVNUcX6k5ngRc3Rv95xh5pCFZ6FoEl9CdnHYt3cNv146cR1NWc7wAOBf4e7p/wN0+ciRp6taNHUCatprjLiCNnWOBvDp2AICa4zZg29g5pKF4hy5JUgMsdEmSGmChS5LUAAtdkqQGWOiSJDXAQpckqQEWuiRJDXAdutQTUjkI+GsgANfUHH9j3EQCCKmsB66i2971pprjhSNHkmaKd+jSShcBJwLvAC4OqWweOY86FwA/S/f3sjWkcsLIeaSZYqFLK23ovX73KCnU1z8G9Z2jpJBmlIUuSVIDLHRJkhpgoUuS1AALXZKkBljokiQ1wEKXJKkBFrokSQ2w0CVJaoCFLklSAyx0SZIaYKFLktQAC12SpAZY6JIkNcBClySpARa6JEkNsNAlSWqAhS5JUgMsdEmSGmChSyv939gBNNGrvdf/O0oKaUZZ6NJKD/Vef32UFOrr/z30/56khbZu7ADSDPocsBcQgOtqjo+OnEdAzfGvQir7Au8Hbqw5+g8taRkLXeqpOe4CLhs7h1aqOV4BXDF2DmkW+ZW7JEkNsNAlSWqAhS5JUgMsdEmSGmChS5LUAAtdkqQGWOiSJDXAQpckqQEWuiRJDbDQJUlqgIUuSVIDLHRJkhpgoUuS1AALXZKkBljokiQ1wEKXJKkBFrokSQ2w0CVJaoCFLo1jV+/1t0dJIakZFro0jgeB55a93j5WEEltsNClEdQcdwEbgQ8Dx9Yc/3LkSJLm3LqxA0iLqub4DPC5sXNIaoN36JIkNcBClySpARa6JEkNsNAlSWqAhS5ptf7nDV5LGoCFLmlVao7/BPzXsre+NFYWaZG5bE3SWjgSOBP415rjXSNnkRaShS5p1WqO3wQ+O3YOaZH5lbskSQ2w0CVJaoCFLklSAyx0SZIaYKFLktQAC12SpAZY6JIkNcBClySpARa6JEkNsNAlSWqAhS5JUgMsdEmSGmChS5LUAAtdkqQGWOiSJDXAQpckqQEWuiRJDbDQJUlqgIUuSVIDLHSpXbt6r789SgpJg7DQpUbVHJ8BHln21vaxskiavnVjB5A0VZuAHwderjn+29hhJE3PW8YOIEmSVs9ClySpARa6JEkNsNAlSWqAhS5JUgMsdEmSGmChS5LUAAtdkqQGWOiSJDXg/wEAAP//7dWBDAAAAMAgf+t7fCWR0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgAGhA8CA0AFgQOgAMCB0ABgQOgAMCB0ABoQOAANCB4ABoQPAgNABYEDoADAgdAAYEDoADAgdAAaEDgADQgeAAaEDwIDQAWBA6AAwIHQAGBA6AAwIHQAGhA4AA0IHgIEAB8YGFUsmH/oAAAAASUVORK5CYII=" />
                </defs>
              </svg>
            </span>
            <div className='flex items-center'>
              <span className='font-semibold text-sky12'>Then</span>
              <span className='font-semibold text-mint11'>Estate</span>
            </div>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link

                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link

                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link

                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                What we offer
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link

                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row">
        <div>
          <span id='custom-text' className='text-sm'>
            &copy; {new Date().getFullYear()} ThenEstate LLC All rights reserved.
          </span>
        </div>
        {/* <div className="flex items-center">
          <span className="">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 "
            />
          </a>
        </div> */}
        {/* <div className="flex gap-2 items-center">
          <Link href='https://x.com/thenpixels' aria-label='thenpixels x link'>
            <TwitterLogo />
          </Link>
          <Link href='https://instagram.com/thenpixels' aria-label='thenpixels instagram link'>
            <InstagramLogo />
          </Link>
        </div> */}
      </div>
    </footer>
  );
}