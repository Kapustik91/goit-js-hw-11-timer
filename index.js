const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    timerFace: document.getElementById('timer-1')
  }

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.intervalId = null;
        this.selector = selector;
        this.targetDate = targetDate;
        
    }

    countTimer() {
        this.intervalId = setInterval(() => {
            const todayDate = Date.now();
            const countTime = this.targetDate - todayDate;
            const time = this.getTimeComponents(countTime);
            updateClockface(time);

            if (countTime <= 0) {
                clearInterval(this.intervalId);
                const time = this.getTimeComponents(0);
                updateClockface(time);
            }

        }, 1000);
    }
    
        getTimeComponents(time) {
            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            return { days, hours, mins, secs };
            
        }

        pad(value) {
            return String(value).padStart(2, '0');
        }

        }


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 1, 2020'),
});

timer.countTimer();

function updateClockface({days, hours, mins, secs}) {
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;  
    
    return `${days}:${hours}:${mins}:${secs}`;
    
}


/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);