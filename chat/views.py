from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required
def chat_room_view(request):
    return render(request, 'chat/room.html')