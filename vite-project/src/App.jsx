import React, { useRef, useState } from 'react';
import './App.css'
import ToggleComponent from './component/ToggleComponent';


// const  App = () => {
  
//   return (
//     <div>
      
//     </div>
//   )
// }

// use of useRef while using current

// const  App = () => {
//   let myHeading = useRef();
//   function changeContent() {
//     myHeading.current.innerText = "Hello React Hook... how you doing?";
//   }
//   return (
//     <div>
//       <h1 ref={myHeading}>Hello React Hook</h1>  
//       <button onClick={changeContent}>Click</button>
//     </div>
//   )
// }


// use of useRef while not using current
/*
const App = () => {
  let myHeading = useRef();
  let myHeading3 = useRef();
  function changeContent(){
    myHeading.innerText = "Hello React.. How you doing?";
    myHeading3.innerText = "I am changed Heading 3";
  }
  return (
    <div>
        <h2 ref={(h2)=>myHeading = h2}>Hello React hook</h2>
        <h3 ref={(h3) => myHeading3 = h3}>I am heading 3</h3>
        <button onClick={changeContent}>Click Me</button>
    </div>
  )
}
*/

// use of useRef while chaging attribute and src of image
/*
const App = () => {
  let myImg = useRef();
  function changeContent(){
    myImg.src = "data:image/jpeg;base64,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";
    myImg.setAttribute("height", "300");
    myImg.setAttribute("width", "600");
  }
  return (
    <div>
        <h2>Photo</h2>
        <img ref={(newImg) => myImg = newImg} src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxUPDxIQDw8PEBAPDxAPDw8PDw8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQuOCgtLisBCgoKDg0NFRAQFSsdHR0rLSsrLS0rLS0rLS0tLS0rLSsrKy0tLS0rLS0tLS0tKy0rLSstKy0rKysrKy4tLSsrLf/AABEIAKsBKAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABEEAACAgEBBgMFBAcGBAcBAAABAgADEQQFBhIhMUETUWEiMnGBkQcUQqEjUmKCscHRM3KisuHwFSRDkjRTVGOzwvEW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMhEAAgIBAwMDAQYFBQAAAAAAAAECEQMEITESQVETYXGRMjOBocHwBRQicuEVQlKx0f/aAAwDAQACEQMRAD8AoV2Sytky0sk62SzmkXvEi8SVfEi8SMzZZNkiZ5EXgFpVEju8geyO7Ss7RgSGyDxyEvA44xWWS8HjkHiRccKF1E3FFxSINLmz9E9zEJjA95m5KP8AWNRcnSVsmeWOOLnN0ly2QEyNpsW7v2gZRkb09pT+fKZN6MjcLgqw6hhgx5MM8f240Rp9Xhz/AHU1L/v6c/kQOJA4k5M0dLu9fYOJuGpe4s4g+P7g6fvYihjnN1FWaZ9RiwR6ss1Fe/6d3+BgsIJE2tqbAtqTxAUsrHvFOLK+pHlMQmKeOUHUlTKwZ8eaHXjkpL9/QbgjGmSKZJMzoRTsrlG9ZqXTOviKKTSOTPI4DDWGFg1ydRGS2BwwWWT4i4I6IcisVixLPhxGuOhdRWxEJI6wRFQ7CCx+CEgliuuOgsqiqKaApihQdRupZJ1tmWl0kF0gto0xbDFkzlukyWxkNFvjjFpCrwuKOyKGdpBYZKxldzHYmgGaRFoTmQkyiGHxR+ORZizLIJg86A2mvZwK8mvsIJHXDFh/lTE5nim/eeLZan/yref/AHuP/uJth4n/AGs4Ndu8CfHqR/WvzoyqNU6HiRmQ+aHh+vnN7R7Rr1QFGpGLDyrsQY5/Po35GcxWjt7ivZ/cRn/hOo2XoW09BvNT26hxhK1rLGsHoDj3fMn5fE0ylbS+z32tfTz4rcX8SeJQUpfecQaaUk+2/jze1fUdqadCvG/6a9ifDGBhceX6vUZbrz5Tn9o7UtuObGOO1Y5Vj93+ZnR6UW6mpqNXVZW3N67jUUCnp1PLIz8xOU1ehurYq9bjhJHHwP4Z9Q+MER6i1BdKqD7e/v5fv9Cf4c8bzTeVqWZPm00126OKXlVa7+Ftbn3Zss0zc6raWcr2JBVD9Vf8pzlq8LFe6kp9Dib+5CZ1Lv2WhgfQtZXj/KZz19nExb9Zy/1OZlP7jH8y+mx14FWu1K9sd/NP9BuOOLZCzQC05j0iWyyVLY5eAxgMgeBDeAIAFXLKyGsSdYyGFHEYxZlmTYQjMY2YBMbRNjPIZI0AiI0RJUZdpMz1liuyIGzRBilUXRRiJFthi2UVeSB5idbL6WSzW8zkaWK2jINBHkoeUkeTBoE0Ss0hYx8wWjTFRG0jMkaRkzRGTQBiRSSFUFmJwABkk+QEZjOg3b4a6L9WV43q4kQeWEDH4Z4xz8hNsUOuVXXf8Eceqzehj6qt2kl5b2SsbT7vKi+JrbBQvZQQHPoSe/ovFNjYur0zB6NMhIUeLi33bW6Z58R6hO3cTitZrHtcvYxZj59APJR2Em2FrjVqa2GSHdamA6lHPD/HB+U3x54RmumNLu3uzz9Toc2XDJ5MjckrSW0LW/HL8W3e51WxdsXXF3sFVOnoB4/7QEOOeM57DmfZ8ph6veq9rD4R4UL4RfDRmx2zkdZob5XiqoaeocIvsstsIHJsvkj5uc/ASXcfQoKWvwDY7ugJ6pWgHIeWTk/SbSeSU1hU3a3b/dceDjxR02LBLWSwKpOoR5VeW3e7ad7OkklyYzbxaxThmKnyspQH8xOiXbVlmj+8Uis2Vf8AiEsDHoMvw4bl2b4ZmptTRJdU1bgHIPCe9dnZx5Th90tea9Qqcyt+KiBz5n3X+X8C0UnkwZFGU21La+69/q18lRWn1unlkx4IxniabVKpLe06S5Sfw1s97Om0u11OlbVXVBAzeHirm9tfu98dy/4vwzHOxtHqR/yd3h29fBsP8j7f7wyI++VoQVaRBw11oLQMcvxIgHw9v/uE5R2IOQSCDkEHBB8we0wz5ql0TSlS37O+9P8Awdmg0TeJ58M3i622lzHpuoqUXs9u97WS7S0VtD+HavC3UHqrDzQ9xKLNOw02pOs2fet/OzSobK7SOZK1sy5bz9gg+hE4vM5suNRpxdpq15+D1NJqJ5OvHkSU4OnXDtWmr7NdnuvoOTAzHJgzI7BERuGSLERENjLJFMCODKRDDJg5jZjExpkNBZjQMyRBHZNCCxyklVY7LEUViI3FDsldmgMmNkUrlo0VldJOrydGlFWk9bSDdl6tpMjSmjSwhjMy7W8nQylWZZRomNFkQWgccYvAGhMZAzR3aRM0pMzaEzTR2BtcUMy2DiotGLRjOO3HjvyOCO/ymSxkbGawm4SUo8nPnwQzQeOatP8Af1Ol2hu0WHjaJhfU3MKGBdfRT+L58/jIt0dnt97LWq1Y0yeIfEUphzyTkf32/dmHo9fbS3FU7oe+D7J+KH2T852uk283/DzqdSqWZsNQrQcAsrLBOeeIfr/SdeH0pz6q6a3rtt+aPG1i1eHD6Vqam1BPiW/ns9rV2vLKx1A2jprEwBfRY9lA6cVZz4f1HsH1AMx93t4jps1upep2yVHKyuzocZ+A9nlNDQbxbOR/ETT2adwCM1ogGD1GEfmOn4e0u7R2fs16/vzeJ4dxDs9XiEZPcqueHn15e91ltSlWSGSPUuXfb32/exhFwxdWDNgn6c2ulVbUu6i09/Kr32dsp7V3yWys16euxS4KF7vDBUHrwBSefr2gbr0LTU+vuHsojJQO7nlkj1J9gfvSTZOzNl6hylH3ixlXiOfHUKOnMlRJ9p7f2eo+7Guy9dOeAJWq+ECg4e7qGxzEEpOXq5Jxdcb7X/jkbeNY/wCV0+DIuqnPb+rp/F9+Oyq+bZDtSw6vQJqMfpqLOC4IM+QcAfOtpmbP3Z1F3Nh4FfUtaCrY/ZTr9cTot2dtUWu9GnoXT4r8VeSLxnKoSVQeqfinF7X25qbsra5C9DXWTXWT3BA9755mWX0qjkk3JtVtsm1zb5/I6dG9XeTT4oxxqLvf+pxU90opbOt3u633VmrtzatFOnOg0J4lbI1OoyD4mRhxxj3iehI5Ach6cpmMTGzOTJkc3fFcLsketpdNHTwcU223bb5b8sLMbMbMWZB0kimImRAwgYig4+YGYjAVD5jExiYJMdhRIstVLKiGW6jHZDJlWOViWSGUQUr1lGyX9RKFsllxICY8FopJqglMsIZUUyZGiLkXEaWEaUUaTI8Zm0aFbyZbJnrbDFsTKRe8WMbJSFs0di7Lv1Vvg6deN8cRJIVEXzZj0ERVEJeAWnY2fZjtALkPpHP6q3uG/wASAfnD3X0On0lln/EqAdQrBVqvRXrRSAQwHNW4jnDcx7PLvCyXE4gmRtPT9oNsbU+w9CaZz0u0qrUyse5UDhf5j6TzrbezX02ofT2EMUIKuowttbDKOvoQQfTmO0pSIcSgZ021DjY+nx0N4z9b/wCc5gmdRsC2rUaR9n2OK7OM2adj3PvcvMh88u4adOmduUe8otL5PN/iS6YYsnaE4yl8bpuva/ockzTotydoWeKdIUN+nvB8WvAIqyMGw55cB90jvyxz5GcblFPb1epqpqHVkPMj+/YFVPoZHtDeWjT1nTbMXgz/AGmoYHLHplM82Pq3Idl8tMeKWGSnkfT7ct+1f+nPqdVj1uN4NPH1G++6jH3ctt12S549nqbxL/w/RmvSV2qLrGFmoJyawRyy3XODwg9sdc9eBR5s7v702UA1XKdTprCfESw8dnt++UL9c55qeR9OedSzdvSar9Js7UVox5nT2EngPw96v6MPKKa/mKePt/t8fHZ2LTz/ANP646lfad+pu1L+7lprtyuflxbgN/z/AC/9Nbn4eJV/pOe2gf01mOnj3Y+HiGdnodEuy6bLr7Km1diGuiusnGOoAyOIjiAJOOQQTgWPmcnuT1J85OZOGKGOXKtv28HRopRz6nPqMbuDUYp9nVt8+LoLMWZHmLM5T1CTMEmDmIGABCEDBzGLQKok4oXFK3HEHiGWCZGxg8cYmAqJFaWqnlEGWK2lJkM0K2khaVankjNLMWRXtKNks2mVXiY4kDxRPFIN0CDJVMiEMSTQmVpIHlYGOGjFRZ444slbjjhoiqLivPVtz9xdpVVNaWo07XBCK7Hc2gDOA4CkD3umczzHd64LrNOzLxganTkqTji/SLjPzn0loNu6e1vDXm4PCQ68LZ88Ht3kSY0jzXbl+09M4W5Hy+QjVZtRyOvCV7+hwfSY+2NW+pq4bQy3IpADAq5U/hIPrzHz857pZplPNGNbfs+6R6r0+c5veVba1B1KV6nTE4LmvPhZ5Di7p/eB+nKL4Q6PAaNS2cEnPxnaLs1tp6NVp4Tr9GCEVmCnUaY5PBk8uJTzGeXMjvyfejcXDeNpmBS4l6jnkxxkoT2Yc/j188c5s7V3ae3q1VtZww6H4GXd8EVRjXoyMyOrI6Eq6sCrKw6gg9DNXZu6O0NSgenTO1bDKu7V0q4818RhxD1GRO7TQafazVXvwJrKHTxlbATWUr+Fv2uQGfLIPYh9u7T1dNxW5HqyfZyPZKj9UjkR8INt8IVpdzitR9nu1xzOjd8dCt2msIHwDkzG1u7+uq/tdJqq8dS2nt4f+4DE9U0u9LKPeP17/CWk31dOYy0W/gdx/wCR4YWGcdx1HcH4Rv5dPSe66beGjWcQ1dFNijAxbXW+TzPcfCU9XuvsZjx/dguSBiu3UVrknlhVYAfKF+wKuzPGQ3PJ5k9SeZMIme06XcfYr5/QOAOpGq1Ix9Xlm37K9ksuV+9V55jh1HF/nUx9SFz3PC8xZnr+s+x7TY/Q6vUIe3i11Wj/AA8M57aH2Ta1OdNun1A8iXpf5Agj/FH1BTOAzHzLu19iarSkDVU2U8XJWYAox8ldcqT6AyhmFioctGLQSYGYDDzEDAjiA6JBHjCFGiGKSKYEfMoiyylkI2yrxQeOAuknd5C5gl4JMGylEBooiYpJokEBFiFiLEKJsGNmEZGYFJj5hAyOOJBZNW5BBBIIIIIJBBHMEEdD6z0jdveG+5GvdPEs0nAt9gCgWVW8S8x5+ySccu/LOJ5os6LdjeW7RllXFmnt/t6W6PyxxA9mx8j37EJqykepbC3vKHwrWLADKMeeV9Z2mzNv1XAo2CGGCrYIYHqCO4xPELijYt078dR93PJ6z14HHYj6HqJZ2ZtiytuuCPOTXgdnrNuxHpJWlDqdBbzeji/S0HzTPNh5YPEPXrOe3n3HGqq8TTuGvQYR2BrfGfcuX0Hfz7Cbu7W3zZWCzDPfnOkyj8/dfs68m+vcehisTR4hVu7tTSHxfBYhf+pSy2jhI64X2sfKdhsXbg1xGksRbQ45huYAUc2J7Y8/Od8dGwX9Ea1bOSOEhHz15D3T9Zz229GumD6/wlrvZDVY1Z9lgxBy3Ic8qBnHeaddLcxlit8kFW4OzguG8RzknLXOvy9nHKVNVufoFbgZLq1YEiyvUqycux4+YPynI6zem7DcLjnnGDOc1m9dwTgLlmwx6gkE8v4Zh1z8j9HH4PSq9xNLz+76xxxc/wBIqWf5eGUtbuZrQQarqbwhzw8TVPnHLkcjv5zz/Ze8t9dfsueJz1JJxn4/D+E0dJv/AKlcAtxks3tNnPvAKM/IfWPrkL0Ydj0HZ27OoCL94YqAQz10obS/fhZuw88AzUt1zA8K1XcurNW+T8OU4rTfaRYpx1wSDnv1xgTa0/2nV49scPnjnIbbLjBR4NltTZ3Rgvm6lf4iRnXjOM/n0lKz7SKAvEckfyj6XfTZ+o5OEBbpxoP4yaLLdl9dqmq1UsRxhkdQysPIg8jPOt6vsxBBu2afVtK7f/E5/wArH59p6Nbs6lxxadwvpniX+omdT94QkWoBzOGV+Ksr254BB9MQTa4G1Z8+3IyMUdWR1JVkdSrKw6gg8wZFme+b0bp6XaKe2RTq1GK9Qq5Potg/Gv5jt5HxXb+wdTorvB1VZrbmUYe1Xav6yN+IfmO4E0jJMmqMyEJHDWMlolWHIwYWZRm0FHzBzBJjsmhyYOYxMbMVlpBgxGCDETFZdAmPGMUkZYjQQYszQwoYwTCJgmI0iBCEGIGQaEghqZGIQgBoaDWNU3EOYIww7Ms3Bcrrxqfn3B8jOXDSfR601tnqp5MvmP6wA6bS7VtqPssROk2VvrfXjLA59c4E4wurLxKcqemOufI+sgZSOnSKkOz3PY++qWD2jwn8p0aa+m9DXYFdHXhZT0ZTPnTS650PInkZ0ez95nRRzIx159ZNNcDuzpN6fsqDZt0LK46+BcwVx6JZ0PwbHxnlG0tktp7DXarVOOqMP95HqJ6Vqt7Xsr4Q5B8wcGcNtHZFVjF2Y8R75Of9Y0/ImjDsuIGBk4Hs+XeDWpyDzwvPJ6luv+s0rN3QBlbG9OYkX/8APW9rMn5/1jsRW8Vug/nykldxkh2LcOtg8umYz7OuA58L/DkYwIb7yfxSGrUMvMGPZWQfaVlPr0+srMe0AOi2TvJfSfYdh6Z5fTpOu2d9pDg8N6hh0OJ5krmGXPeJpMds962FtrTarnU2GHMr0I+E39fsPT63TnT6pBbWea55PW3Zkbqrevy6cp87bE2s2nvS1fwkZGeq9x9J7Xo9v8KraDxVWKGrYdx3HxHQiZtUyk7PKN+/s91OzibRm/RlsLeo9qvPQWr+E9uLoeXQnE49Z9QabeSqwcLcJDAqQ2GBB6gjuJ5dv19nq+1q9mr7Jy9mkX2gPNtOe4/9vqO3kLUiWjzPMfMDMbMsiiTMRMDMbMdiocmLMHMWYrKDzBJgZiiGPmKNFACfii4pFmLMqyOkkLQSYOY2YhoKIGDmKIZIDDEjWGI0gbDgwosRohyD0uqas5XofeU+63+/Ob+lZLV4k5Hup6gznSIVNzIwdCVYdx/A+Y9IUNM2bFZT0yPzEDxuwPyPWWtJrVvXnhbVHtKOjeq+Y/MfQyC6rnzklgVakiXE1eZnWV9xDD+zkdYAaD6jlIxr8DrMi6/tIPF79oUButtDlILNpHscfzmSbIz2woCzqNcx/wDyUWPPMFrYPFACTijF5EWizACdTkzuNztscKnS3nj01vUZw9bdnQn3WH0PTnOCVprbOuwR9YNWB2O8ey9To+HUVub9I5Hh6hOgJ6LYPwN+R7HtI9nb631N2etsFlYdD3x5efzl/dzebwlNdwFtLqVsqYBkZD1UqeRHWZe8W7taIdZoSbdEx9pSeKzSOfwv5pno3yPPBMfI/gn21snTbSU36QpRr+r1EhKtSfnyV/Xoe/nPPNTQ9btXYrV2IeF0cFWU+RE3K7CpypII6YnRWNp9oVLXqz4WqReCnVgZOB0WwfiX8x28jXAcnnkUu7W2XdprTVevCw5qw5pYvZkb8S/7ODKUYh4JhRYgAGI8LEWIADFHigA2Y+YGYgYCDjwRCAlUJsWIo+IsQoViENYOIQjEyQQoKwsxmYjAaETAYxMpEecHI5EcwRyIPpNKja5xi0cX7YxxfvDv8evxmY0GSzVHQcQZeJSGB6Ef76ynb9PhM6m9kOVOM9R2PxE0K9VW/vHw2/a935H+sQyBz5/KRFZoDQ5GVZWHpzEis0bCAFImAWli2kjtK7JAAMxZiIgwALMUGKABiW9NbgykIQbEAN6nVDzmzsDbj0WZUhkbKvW3Ot0PvBlPIgjPWcWl+P6y3TfiDQHXby7FWsLqtN7WjuPTJY6a09an9P1Seo5HmMnBWwjpNbd3eTw81WgWUWjgtqf3XU/wPkRz7x9u7C8NPvOmJu0Z6t1s05/VtHl5P0PfB6ymMs6DalV1Y02sQXUlhgMSrVn9ZHzlT/HocyltfcWwA26B/vdPXw+Q1Kd/dHKz93n+zMdXl/QbUsrOVYjHqY68BZzLoQSpBVlJDKQQVI6gjsYhPQ79qaXWALrag7gYW5PYvXy9sdQPI5Extbuaxy+itXUr18Nytd4Hpn2W+o+EL8hRzAEZoeopetuC1GrcdUsUq30MhLRiEYoJMUAI4QjQhAQaiSAQVkiy0ZsbEYiSwDGRYMQjGIRFhAw8wBCjEImC0UYxDSAMAwzBMTLQ0aKIyRjD6GTV6y1ejt8zxD85AYoDLo2k/cI3yIP5GP8AfEPWvHwb+olERQAuNbV5OPkv9ZGTX5kfFf6GQRoAStX5EH4SMiDLFvNcnqe8AII+Y0YQAISRDIooATiwzo92t5bNM44W9k8mU81YHqCO4nLwhAD0bXbAo1am/ZvDXdjL6IkBGPc0k+6f2Dy8iOh49wysUYMrqcMrqVdW7gg8wfQyTYWqdXXhYjp0+M77fHSpZsv73YobU1vVWt3SzgYnKkj3hz5ZzjtiTdbDPP1eWdPrXQ5UkfAygskEoR06bxca+HqK01Ff6tyh8fAnmPiJTv2Bor+ensOlc9EsJtpPoCfaX85iiSU2EdCRFXgdlfae72poy1lfFWP+rUfEr+JI9394CKdNszVWAjDER4uqgP/Z'/>
        <button onClick={changeContent}>Change Image</button>
    </div>
  )
}
*/
// changing input attribute using use ref
/*
const App = () => {
  let userName = useRef();
  function changeContent(){
    let inputVal = userName.value;
    alert(inputVal)
    userName.value = "Asif";
  }
  return (
    <div>
        <input type="text" name='name' value='Azharul' ref={(uname)=> userName = uname}/>
        <button onClick={changeContent}>Submit</button>
    </div>
  )
}
*/

// changing css attribute using use ref
// const App = () => {
//   let myText = useRef();
//   function changeContent(){
//     myText.classList.add("text-primary");
//     myText.classList.remove("text-success");
//     myText.innerText = "Text Primary";
//   }
//   return (
//     <div>
//         <h3 className='text-success' ref={(h3)=> myText = h3}>Text Success</h3>
//         <br />
//         <button onClick={changeContent}>Submit</button>
//     </div>
//   )
// }

// live test
// const  App = () => {
  
//   return (
//     <div>
//       <ToggleComponent/>
//     </div>
//   )
// }

//useRef() Method Create Persisted Mutable Values in react i.e changable variable

// const  App = () => {
//   let number = useRef(0);
//   const incNum = () => {
//     number.current++;
//     console.log(number.current);
//   }
//   return (
//     <div>
//       <button onClick={incNum}>Increment</button>
//     </div>
//   )
// }


// const  App = () => {
//   // create a ref to persist a mutable value
//   const persistedValueRef = useRef(null);

//   // State to track a value that causes re-render
//   const [stateValue, setStateValue] = useState(0);

//   const handleButtonClick = () => {
//     // update the persistedValue without causing a re-render
//     persistedValueRef.current = persistedValueRef.current?persistedValueRef.current+1: 1;
//     console.log('Persisted value: ', persistedValueRef.current);

//     // update the stateValue which triggers re-render
//     setStateValue((prev) => prev + 1)
//   }
//   return (
//     <div>
//       <button onClick={handleButtonClick}>Increment</button>
//       <p>State value: {stateValue}</p>
//     </div>
//   )
// }


const  App = () => {
  
  return (
    <div>
      
    </div>
  )
}


export default App
