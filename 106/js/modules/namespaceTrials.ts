export const loggerType = {
    Alert: "alert",
    Console: "console",
    Toaster: "toaster"
}

export namespace App.Utils {
    export class Logger {
        constructor (public loggerType) {}

        log (message: string) {
            switch (this.loggerType) {
                case loggerType.Alert:
                    alert (message);

                    break;
                case loggerType.Console:
                    console.log (message);

                    break;
                case loggerType.Toaster:
                    toastr.info (message);

                    break;
            }
        }
    }
}