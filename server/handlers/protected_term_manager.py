import os
import docker

from terminado import UniqueTermManager
from util.user_gen import randomString

class ProtectedTermManager(UniqueTermManager):
    def __init__(self, **kwargs):
        self.max_terminals = 500
        super(UniqueTermManager, self).__init__(shell_command=["bash"], **kwargs)
        self.terminal = None
    
    def get_terminal(self, url_component=None):
        if self.max_terminals and len(self.ptys_by_fd) >= self.max_terminals:
            raise MaxTerminalsReached(self.max_terminals)
        
        self.shell_command = self.user_gen()
        term = self.new_terminal()
        self.start_reading(term)
        return term

    def user_gen(self):
        userid = "User"+randomString(28)
        docker.from_env().containers.run("user-container", detach=True, name=userid)
        
        return ["./lib/docker", "exec", "-it", userid, "bash"]
