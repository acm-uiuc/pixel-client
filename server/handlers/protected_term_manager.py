import os
import docker

from terminado import UniqueTermManager
from util.user_gen import start_container

class ProtectedTermManager(UniqueTermManager):
    def __init__(self, **kwargs):
        self.max_terminals = 500
        super(UniqueTermManager, self).__init__(shell_command=["bash"], **kwargs)
        self.terminal = None
    
    def get_terminal(self, userid, url_component=None):
        if self.max_terminals and len(self.ptys_by_fd) >= self.max_terminals:
            raise MaxTerminalsReached(self.max_terminals)
        
        self.shell_command = start_container(userid)
        term = self.new_terminal()
        self.start_reading(term)
        return term
