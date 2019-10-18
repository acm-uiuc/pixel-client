import os

from terminado import UniqueTermManager
from util.user_gen import randomString

class ProtectedTermManager(UniqueTermManager):
    def __init__(self, **kwargs):
        self.max_terminals = 500
        command = self.user_gen()
        super(UniqueTermManager, self).__init__(shell_command=command, **kwargs)
        self.terminal = None

    def user_gen(self):
        userid = "User"+randomString(28)
        os.system('useradd -m '+userid)

        return ["su", "-l", userid]
