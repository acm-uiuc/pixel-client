import psutil
import time

def main():
    print("test")
    ps = get_connection_ps()
    wait_for_ps_end(ps)

def get_connection_ps():
    # Iterate over all running process
    while True:
        for proc in psutil.process_iter():
            try:
                # Get process name & pid from process object.
                if proc.pid != 1:
                    return proc.pid
            except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                pass

def wait_for_ps_end(ps):
    while psutil.pid_exists(ps):
        time.sleep(1)


if  __name__ =='__main__':
    main()
